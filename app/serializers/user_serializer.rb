class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :default_city, :starred
  has_many :hiddens
end
