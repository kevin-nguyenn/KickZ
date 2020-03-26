class AddToShoes < ActiveRecord::Migration[5.2]
  def change
    add_column :shoes, :style_code, :string
    add_column :shoes, :colorway, :string
    add_column :shoes, :release_date, :string, null: false
  end
end
