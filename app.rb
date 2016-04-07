require 'sinatra'
require 'dotenv'
Dotenv.load

get '/' do
  'Hello world!'
end

get '/search' do
  erb :search
end
