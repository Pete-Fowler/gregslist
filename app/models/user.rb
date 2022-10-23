class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :events
    has_many :cities, through: :posts  
    has_many :cities, through: :events
    validates :username, presence: true, uniqueness: true
end
