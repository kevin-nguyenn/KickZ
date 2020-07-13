class CreatePortfolioItems < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolio_items do |t|
      t.integer :user_id, null: false
      t.integer :shoe_id, null: false
      t.string :size, null: false
      t.integer :purchase_price, null: false
      t.timestamps
    end

    add_index :portfolio_items, :user_id
    add_index :portfolio_items, :shoe_id
  end
end
