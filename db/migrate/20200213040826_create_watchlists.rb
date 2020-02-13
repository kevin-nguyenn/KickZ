class CreateWatchlists < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlists do |t|
      t.integer :user_id, foreign_key: true
      t.integer :shoe_id, foreign_key: true
      t.timestamps
    end

    add_index :watchlists, :user_id
    add_index :watchlists, :shoe_id
  end
end
