class PostsController < ApplicationController



  def index_categories
    if(params[:q])
      posts = Post.all.filter do |post|
       
      end
    end
    render json: posts
  end

  def index
    posts = Post.all
    if(params[:my_id])
      posts = User.find(params[:my_id]).posts
    elsif(params[:q])
      posts = Post.all.filter do |post|
        post.title.downcase.include?(params[:q].downcase) || 
        post.description.downcase.include?(params[:q].downcase) ||
        post.area.downcase.include?(params[:q].downcase) || 
        post.category.downcase.include?(params[:q].downcase) || 
        post.subcategory.downcase.include?(params[:q].downcase)
      end
    elsif(params[:starred]) 
      arr = params[:starred].split(',')
      posts = Post.where(id: arr)
    elsif(params[:hiddens])
      user = User.find(params[:hiddens])
      posts = []
      user.hiddens.each do |hidden| 
        posts << Post.find(hidden.post_id)
      end
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

  def destroy 
    post = Post.find(params[:id])
    post.destroy
    render json: {}, status: :accepted
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
    params.permit(:id, :my_id, :city_id, :user_id, :title, :description, :image, :category, :subcategory, :area, :postal_code, :price, :hiddens)
  end

end