class User < ApplicationRecord
    has_many :posts
    has_many :events
    has_many :cities, through: :posts  
    has_many :cities, through: :events
end
