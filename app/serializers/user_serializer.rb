class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :default_city, :starred, :hidden
end
