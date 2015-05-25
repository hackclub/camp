require 'rubygems'
require 'sinatra'
require 'pry'

class StaticPageServer < Sinatra::Base

  client = Google::APIClient.new
  auth = client.authorization
  # Follow "Create a client ID and client secret" in
  # # https://developers.google.com/drive/web/auth/web-server] to get a client ID and client secret.
  auth.client_id = ENV['CLIENT_ID']
  auth.client_secret = ENV['CLIENT_SECRET']
  auth.scope =
    "https://www.googleapis.com/auth/drive " +
    "https://spreadsheets.google.com/feeds/"
  auth.redirect_uri = "http://example.com/redirect"
  auth.refresh_token = ENV['REFRESH_TOKEN']
  auth.fetch_access_token!
  # Creates a session.
  session = GoogleDrive.login_with_oauth(auth.access_token)
  spreadsheet = session.spreadsheet_by_key(ENV['SPREADSHEET_KEY'])

  def payment_submitted(secret, spreadsheet)
    cohorts = []
    for worksheet in spreadsheet.worksheets
      worksheet.reload()
      if worksheet.title.include? "Cohort "
        cohorts.push(worksheet)
      end
    end
    (cohorts.length).times do |r|
      cohorts[r].rows[0].length.times do |i|
        if cohorts[r].rows[0][i].downcase.include? "id"
          (cohorts[r].num_rows-1).times do |x|
            if (cohorts[r][x+2, i+1] == secret)
              cohorts[r].num_cols.times do |n|
                if cohorts[r].rows[0][n+1].downcase.include? "status"
                  if cohorts[r][x+2, n+1] == "paid"
                    return 2 # Already paid
                  end
                  cohorts[r][x+2, n+1] = "paid"
                  cohorts[r].save()
                  return 0 # New payment saved
                end
              end
            end
          end
        end
      end
      return 1 # Secret not found
    end
  end

  # Routing
  #get '/:secret' do
  #  @secret = params[:secret]
  #  erb :payment
  #end

  get '/:secret' do
    @secret = params[:secret]
    @status = payment_submitted(@secret, spreadsheet)
    if @status == 0
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
