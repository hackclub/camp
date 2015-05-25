require 'sinatra'
require 'pry'
require 'stripe'

class StaticPageServer < Sinatra::Base
  client = Google::APIClient.new
  auth = client.authorization

  # Follow "Create a client ID and client secret" in
  # https://developers.google.com/drive/web/auth/web-server to get a
  # client ID and client secret.
  auth.client_id = ENV['CLIENT_ID']
  auth.client_secret = ENV['CLIENT_SECRET']
  auth.scope = 'https://www.googleapis.com/auth/drive ' \
               'https://spreadsheets.google.com/feeds/'
  auth.redirect_uri = 'http://example.com/redirect'
  auth.refresh_token = ENV['REFRESH_TOKEN']
  auth.fetch_access_token!

  # Creates a session.
  session = GoogleDrive.login_with_oauth(auth.access_token)
  spreadsheet = session.spreadsheet_by_key(ENV['SPREADSHEET_KEY'])

  # Set up Stripe settings and get the client ready.
  set :stripe_publishable_key, ENV['STRIPE_PUBLISHABLE_KEY']
  set :stripe_secret_key, ENV['STRIPE_SECRET_KEY']

  Stripe.api_key = settings.stripe_secret_key

  def payment_submitted(secret, spreadsheet)
    cohorts = []
    for worksheet in spreadsheet.worksheets
      worksheet.reload()
      if worksheet.title.include? 'Cohort '
        cohorts.push(worksheet)
      end
    end
    cohorts.length.times do |r|
      cohorts[r].rows[0].length.times do |i|
        if cohorts[r].rows[0][i].downcase.include? 'id'
          (cohorts[r].num_rows-1).times do |x|
            if (cohorts[r][x+2, i+1] == secret)
              cohorts[r].num_cols.times do |n|
                if cohorts[r].rows[0][n].downcase.include? 'status'
                  if cohorts[r][x+2, n+1] == 'paid'
                    return 2 # Already status
                  end
                  cohorts[r][x+2, n+1] = 'paid'
                  cohorts[r].save()
                  return 0 # New payment saved
                end
              end
            end
          end
        end
      end
    end
    return 1 # Secret not found
  end

  # Routing
  get '/:secret' do
    @secret = params[:secret]
    @stripe_publishable_key = settings.stripe_publishable_key
    erb :payment
  end

  post '/:secret/charge' do
    @amount = 59500
    @secret = params[:secret]

    @status = payment_submitted(@secret, spreadsheet)

    if @status == 0 # is in the spreadsheet and hasn't paid yet
      customer = Stripe::Customer.create(
        description: 'Hack Camp parent',
        email: params[:stripeEmail],
        source: params[:stripeToken]
      )
  
      charge = Stripe::Charge.create(
        amount: @amount,
        description: 'Hack Camp tuition',
        currency: 'usd',
        customer: customer.id
      )

      "Thanks, #{params[:secret]}! Your payment has been confirmed"
    elsif @status == 1
      "Key: #{params[:secret]} not found :("
    elsif @status == 2
      "You've already paid!"
    end
  end

  # Error handling
  def error_page(code)
    if File.file?(File.join('public', "#{code.to_s}.html"))
      File.read(File.join('public', "#{code.to_s}.html"))
    else
      'Something broke...'
    end
  end

  set :show_exceptions, false

  not_found do
    status 404
    error_page 404
  end
end
