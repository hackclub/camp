require 'rubygems'
require 'sinatra'

class StaticPageServer < Sinatra::Base

  # Creates a session.
  access_token = ENV['REFRESH_TOKEN']
  session = GoogleDrive.login_with_oauth(ENV['ACCESS_TOKEN'])
  spreadsheet = session.spreadsheet_by_key(ENV['SPREADSHEET_KEY'])

  def payment_submitted(secret, spreadsheet)
    for ws in spreadsheet.worksheets
      ws.reload()
    end
    reload_all(spreadsheet)
    cohorts = []
    for worksheet in spreadsheet.worksheets
      if worksheet.title.include? "Cohort "
        cohorts.push(worksheet)
      end
    end
    (cohorts.length+1).times do |r|
      cohorts[r-1].rows[0].length.times do |i|
        if cohorts[r-1].rows[0][i].downcase.include? "secret"
          (cohorts[r-1].num_rows-1).times do |x|
            if (cohorts[r-1][x+2, i+1] == secret)
              if cohorts[r-1][x+2, i] == "paid"
                return 2 # Already paid
              end
              cohorts[r-1][x+2, i] = "paid"
              cohorts[r-1].save()
              return 0 # New payment saved
            end
          end
        end
      end
      return 1 # Secret not found
    end
  end

  # Routing

  get '/' do
    html :index
  end

  get '/application' do
    html :application
  end

  get '/:secret' do
    @secret = params[:secret]
    erb :payment
  end

  post '/:secret' do
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
  
  def html(view)
    File.read(File.join('views', "#{view.to_s}.html"))
  end

  # Error handling
  def error_page(code)
    if File.file?(File.join('public', "#{code.to_s}.html"))
      File.read(File.join('public', "#{code.to_s}.html"))
    else
      'Boom'
    end
  end

  set :show_exceptions, false

  not_found do
    status 404
    error_page 404
  end
end
