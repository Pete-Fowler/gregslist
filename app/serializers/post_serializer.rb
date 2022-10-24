class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :city_id, :title, :description, :image, :category, :subcategory, :area, :postal_code, :price, :created_at, :updated_at
end
