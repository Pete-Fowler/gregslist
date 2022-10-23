class SessionsController < ApplicationController
  def create 
    user = User.find_by(params[:username])
    if user&.authenticate 
      session[:user_id] = user.id 
      render json: user, status: :created
    else
      render json: {error: 'Invalid username or password'}, status: :unauthorized
    end
  end

  def destroy
    user = User.find_by(params[:username]) 
    user.destroy
    render json: {}, status: :accepted
  end 
end
