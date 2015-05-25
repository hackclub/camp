#!/usr/bin/env ruby

require 'optparse'
require 'bundler/setup'
require 'google/api_client'

options = {}

optparse = OptionParser.new do |opts|
  opts.banner = "Usage: #{__FILE__} [options]"

  opts.on('-i', '--id ID', 'Client ID') { |v| options[:client_id] = v }
  opts.on('-s', '--secret SECRET', 'Client SECRET') { |v| options[:client_secret] = v }
end

begin
  optparse.parse!
  mandatory = [:client_id, :client_secret]
  missing = mandatory.select{ |param| options[param].nil? }
  unless missing.empty?
    puts "Missing options: #{missing.join(', ')}"
    puts optparse
    exit
  end
rescue OptionParser::InvalidOption, OptionParser::MissingArgument
  puts $!.to_s
  puts optparse
  exit
end

# Authorizes with OAuth and gets an access token.
client = Google::APIClient.new
auth = client.authorization
auth.client_id = options[:client_id]
auth.client_secret = options[:client_secret]
auth.scope =
  "https://www.googleapis.com/auth/drive " +
  "https://spreadsheets.google.com/feeds/"
auth.redirect_uri = "urn:ietf:wg:oauth:2.0:oob"

print("1. Open this page:\n%s\n\n" % auth.authorization_uri)
print("2. Enter the authorization code shown in the page: ")

auth.code = $stdin.gets.chomp
puts auth.code
auth.fetch_access_token!

puts "Refresh token: #{auth.refresh_token}"
puts "Access token: #{auth.access_token}"
