class Shoe < ApplicationRecord
    validates :name, presence: true
    validates :ticker, presence: true, uniqueness: true

    has_one_attached :photo
    
    has_many :transactions,
        foreign_key: :shoe_id,
        class_name: 'Transactions'

    has_many :followers,
        foreign_key: :shoe_followed_id,
        class_name: 'Followers'
end
