# Config for loading Gemfile
require 'rubygems'
require 'bundler'
Bundler.require

# Run the thing
require './server'
run StaticPageServer
