class PortfolioItem < ApplicationRecord
    validates :user_id, :shoe_id, :size, :purchase_price, presence: true

    belongs_to :user

    belongs_to :shoe
end
