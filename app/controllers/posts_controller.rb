class PostsController < ApplicationController

  def index
    posts = Post.all
    if(params[:my_id])
      posts = User.find(params[:my_id]).posts
    end
    render json: posts
  end

  def show
    post = Post.find(params[:id])
    render json: post, status: :ok
  end

  def create
    post = Post.create(post_params)

    if post.valid?
      render json: post, status: :created
    else
      render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.permit(:id, :my_id, :city_id, :user_id, :title, :description, :image, :category, :subcategory, :area, :postal_code, :price)
  end

end
