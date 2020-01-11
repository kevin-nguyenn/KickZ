class Shoe < ApplicationRecord
    validates :name, presence: true
    validates :ticker, presence: true, uniqueness: true

    has_many :transactions

    has_many :followers,
        foreign_key: :shoe_followed_id,
        class_name: 'Followers'

end
