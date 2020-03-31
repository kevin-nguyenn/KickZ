class Sale < ApplicationRecord
    validates :order_id, :shoe_id, :sex, :size, :date, :price, :active, null: false

    belongs_to :order,
        foreign_key: :order_id,
        class_name: :Order

    belongs_to :shoe
end
