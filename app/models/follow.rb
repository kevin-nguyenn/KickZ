class Follow < ApplicationRecord
    validates :shoe_id, :user_id, presence: true

    belongs_to :user

    belongs_to :shoe
end
