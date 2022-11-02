class Post < ApplicationRecord
    belongs_to :city
    belongs_to :user
    has_many :hiddens
    has_many :users, through: :hiddens
end
