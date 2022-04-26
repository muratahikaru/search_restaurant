class RestaurantsController < ApplicationController
  require 'rexml/document'

  def search
  end

  def index
    key = "3012a463ad450b03"
    range = params[:range]
    latitude = params[:latitude]
    longitude = params[:longitude]

    params = URI.encode_www_form({ key: key, lat: latitude, lng: longitude, range: range})

    uri = URI.parse("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?#{params}")
    response = Net::HTTP.start(uri.host, uri.port) do |http|
      http.get(uri.request_uri)
    end

    case response
    when Net::HTTPSuccess
      xml = REXML::Document.new(response.body)

      hash = Hash.from_xml(xml.elements['results'].to_s)

      @restaurants = hash["results"]["shop"]
    end

  end

  def show
    id = params[:id]
    key = "3012a463ad450b03"

    params = URI.encode_www_form({ key: key, id: id})
    uri = URI.parse("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?#{params}")
    response = Net::HTTP.start(uri.host, uri.port) do |http|
      http.get(uri.request_uri)
    end

    case response
    when Net::HTTPSuccess
      xml = REXML::Document.new(response.body)

      hash = Hash.from_xml(xml.elements['results'].to_s)

      @restaurant = hash["results"]["shop"]
    end

  end
end
