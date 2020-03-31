class Shoe < ApplicationRecord
    validates :name, presence: true
    validates :ticker, presence: true, uniqueness: true
    validates :price, presence: true
    validates :brand, presence: true
    validates :release_date, presence: true

    has_one_attached :photo
    
    has_many :sales

    has_many :orders

    has_many :follows
end
