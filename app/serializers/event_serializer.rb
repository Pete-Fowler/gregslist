class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :city_id, :title, :date, :duration, :description, :image, :category, :area, :postal_code, :price, :created_at, :updated_at
end
