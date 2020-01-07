class CreateShoes < ActiveRecord::Migration[5.2]
  def change
    create_table :shoes do |t|
      t.string :name, null: false
      t.string :ticker, null: false
      
      t.timestamps
    end

    add_index :shoes, :name
    add_index :shoes, :ticker, unique: true
  end
end
