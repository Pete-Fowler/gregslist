class City < ApplicationRecord

    has_many :posts
    has_many :events
    has_many :users, through: :posts  
    has_many :users, through: :events

end
