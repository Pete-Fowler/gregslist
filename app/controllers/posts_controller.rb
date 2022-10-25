class PostsController < ApplicationController

  def index
    posts = Post.all
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

  def update
    post = Post.find(params[:id])
    if post.update(post_params)
      render json: post, status: :accepted
    else
      render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.permit(:id, :city_id, :user_id, :title, :description, :image, :category, :subcategory, :area, :postal_code, :price)
  end

end
