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


  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
