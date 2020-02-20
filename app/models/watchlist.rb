class Watchlist < ApplicationRecord
    validates :user_id, uniqueness: { scope: :shoe_id }

    belongs_to :user

    has_many :shoes
end
