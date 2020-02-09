class AddBrandsToShoes < ActiveRecord::Migration[5.2]
  def change
    add_column :shoes, :brand, :string, null: false
    add_index :shoes, :brand
  end
end
