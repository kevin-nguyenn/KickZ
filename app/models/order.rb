class Order < ApplicationRecord
    validates :shoe_id, :seller_id, :size, :sex, :price, :order_type, :active, :sold, presence: true

    belongs_to :shoe

    belongs_to :seller,
        foreign_key: :seller_id,
        primary_key: :id,
        class_name: :User
end
