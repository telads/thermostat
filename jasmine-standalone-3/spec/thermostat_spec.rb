require 'spec_helper'

describe 'api' do
  describe 'get temperature' do
    it 'returns the current thermostat data' do
      get '/api/thermostat'
      parsed_body = JSON.parse(last_response.body)
      expect(last_response).to be_ok
      expect(parsed_body['temperature']).to eq 20
    end
  end

  describe 'keeps the temperature' do
    it 'returns a temperature that has previously been stored' do
      temperature = "18"
      post '/api/thermostat', { temperature: temperature }.to_json
      get '/api/thermostat'
      parsed_body = JSON.parse(last_response.body)
      expect(last_response).to be_ok
      expect(parsed_body['temperature']).to eq temperature
    end
  end

  describe 'post temperature' do
    it 'receives a new temperature and returns 200 status' do
      post '/api/thermostat', { temperature: "23" }.to_json
      expect(last_response.status).to eq 200
    end
  end
end
