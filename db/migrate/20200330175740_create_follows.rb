class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :shoe_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :follows, :shoe_id
    add_index :follows, :user_id
    add_index :follows, [:user_id, :shoe_id], unique: true
  end
end
