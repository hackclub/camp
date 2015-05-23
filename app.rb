require 'rubygems'
require 'sinatra'
require 'sinatra/config_file'

def get_auth_token
  # Authorizes with OAuth and gets an access token.
  client = Google::APIClient.new
  auth = client.authorization
  auth.client_id = client_id
  auth.client_secret = client_secret 
  auth.scope =
    "https://www.googleapis.com/auth/drive " +
    "https://spreadsheets.google.com/feeds/"
  auth.redirect_uri = "urn:ietf:wg:oauth:2.0:oob"
  print("1. Open this page:\n%s\n\n" % auth.authorization_uri)
  print("2. Enter the authorization code shown in the page: ")
  auth.code = $stdin.gets.chomp
  auth.fetch_access_token!
  access_token = auth.access_token
  return access_token
end

def check_for_token()
  # If something funny happens to the token, just `rm .secret_token` and run
  # the script from scratch; it will prompt you to create another if need be
  if File.exist? (".secret_token") 
    return File.open(".secret_token", "r").read
  else
    auth_token = get_auth_token()
    f = File.new(".secret_token","w")
    f.write(auth_token)
    f.close
    return auth_token
  end
end

def reload_all(spreadsheet)
  for ws in spreadsheet.worksheets 
    ws.reload()
  end
end

class StaticPageServer < Sinatra::Base
  # Register our configuration secrets
  register Sinatra::ConfigFile
  config_file '.config.yml'

  # Get an access token from google (this part requires human intervention)
  access_token = check_for_token()

  # Creates a session.
  session = GoogleDrive.login_with_oauth(access_token)
  spreadsheet = session.spreadsheet_by_key(spreadsheet_key)
  
  def payment_submitted(secret, spreadsheet)
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

  get '/payment' do
    @secret = params[:secret]
    html :payment
  end

  post '/invite/:secret' do
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

end
