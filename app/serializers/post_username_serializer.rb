class PostUsernameSerializer < ActiveModel::Serializer
  attributes :username, :starred, :hidden
end
