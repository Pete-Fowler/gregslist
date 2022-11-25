class PostUsernameSerializer < ActiveModel::Serializer
  attributes :username, :starred, :hiddens
end
