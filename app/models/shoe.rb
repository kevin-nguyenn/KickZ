class Shoe < ApplicationRecord
    validates :name, presence: true
    validates :ticker, presence: true, uniqueness: true
    validates :price, presence: true
    validates :brand, presence: true
    validates :release_date, presence: true

    has_one_attached :photo
    
    has_many :transactions,
        foreign_key: :shoe_id,
        class_name: 'Transactions'

    has_many :follows
end
