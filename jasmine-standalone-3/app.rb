require 'sinatra'
require 'sinatra/json'
require 'pry'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/' do
    erb :index
  end

  get '/api/thermostat' do
    # Does session hash have a key :temperature ?
    # If it does, use the value at that key
    # But if it doesn't, then use 0 (made into a string)

    temperature = session[:temperature] || 20
    status 200
    json(temperature: temperature)
  end

  post '/api/thermostat' do
    data = JSON.parse(request.body.read)
    session[:temperature] = data['temperature']
    p session[:temperature]
    status 200
  end
end
