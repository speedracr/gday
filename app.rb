require 'sinatra'
require 'dotenv'
require 'twitter'
Dotenv.load

enable :sessions
set :session_secret, 'mysupersecretsession'

CALLBACK_URL = 'http://localhost:9393/oauth/callback'


$client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ENV['TWITTER_KEY']
  config.consumer_secret     = ENV['TWITTER_SECRET']
  config.access_token        = ENV['TWITTER_ACCESS_TOKEN']
  config.access_token_secret = ENV['TWITTER_ACCESS_SECRET']
end

def get_tweets_for_search_term(searchterm)
  $client.search(searchterm).take(10)
end

get '/images' do
  erb :images
end

get '/twitter' do
  erb :twitter
end

get '/twitterresults' do
  @tweets = get_tweets_for_search_term(params[:searchterm])
  erb :twitterresults
end

