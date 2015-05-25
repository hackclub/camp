require 'rubygems'
require 'bundler/setup'
require 'google/api_client'

# Authorizes with OAuth and gets an access token.
client = Google::APIClient.new
auth = client.authorization
auth.client_id = ENV['CLIENT_ID']
auth.client_secret = ENV['CLIENT_SECRET']
auth.scope =
  "https://www.googleapis.com/auth/drive " +
  "https://spreadsheets.google.com/feeds/"
auth.redirect_uri = "urn:ietf:wg:oauth:2.0:oob"
print("1. Open this page:\n%s\n\n" % auth.authorization_uri)
print("2. Enter the authorization code shown in the page: ")
auth.code = $stdin.gets.chomp
auth.fetch_access_token!
puts auth.refresh_token
puts auth.access_token
