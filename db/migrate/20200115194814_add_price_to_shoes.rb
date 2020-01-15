class AddPriceToShoes < ActiveRecord::Migration[5.2]
  def change
    add_column :shoes, :price, :integer, null: false
  end
end
