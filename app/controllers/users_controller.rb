class UsersController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: :create

  def index
    render json: User.all
  end

  # GET /me
  def show
    render json: @current_user
  end

  # POST /users - SIGNUP
  def create
    user = User.create!(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    user = User.find(params[:id])
    if(params[:star])
      user.starred << params[:star]
      user.save
    end
    if(params[:unstar])
      user.starred = user.starred.delete(params[:unstar])
      user.save
    end
    render json: user, status: :ok
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :star, :unstar)
  end

end
