class CitiesController < ApplicationController

  def index
    render json: City.all
  end
  
  def create 
    city = City.create!(params[:name])
    render json: city, status: :created
  end 
end
