# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_13_185935) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "follows", force: :cascade do |t|
    t.integer "shoe_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shoe_id"], name: "index_follows_on_shoe_id"
    t.index ["user_id", "shoe_id"], name: "index_follows_on_user_id_and_shoe_id", unique: true
    t.index ["user_id"], name: "index_follows_on_user_id"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "shoe_id", null: false
    t.integer "seller_id", null: false
    t.integer "buyer_id"
    t.integer "price", null: false
    t.string "order_type", null: false
    t.string "active", null: false
    t.string "sold", null: false
    t.string "shipped", null: false
    t.string "sex", null: false
    t.string "size", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["buyer_id"], name: "index_orders_on_buyer_id"
    t.index ["seller_id"], name: "index_orders_on_seller_id"
    t.index ["shoe_id"], name: "index_orders_on_shoe_id"
  end

  create_table "portfolio_items", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "shoe_id", null: false
    t.string "size", null: false
    t.integer "purchase_price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shoe_id"], name: "index_portfolio_items_on_shoe_id"
    t.index ["user_id"], name: "index_portfolio_items_on_user_id"
  end

  create_table "sales", force: :cascade do |t|
    t.integer "order_id", null: false
    t.integer "shoe_id", null: false
    t.date "date", null: false
    t.string "active", null: false
    t.integer "price", null: false
    t.string "sex", null: false
    t.string "size", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shoes", force: :cascade do |t|
    t.string "name", null: false
    t.string "ticker", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "price", null: false
    t.string "brand", null: false
    t.string "style_code"
    t.string "colorway"
    t.string "release_date", null: false
    t.index ["brand"], name: "index_shoes_on_brand"
    t.index ["name"], name: "index_shoes_on_name"
    t.index ["ticker"], name: "index_shoes_on_ticker", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username", "email", "session_token"], name: "index_users_on_username_and_email_and_session_token", unique: true
  end

  create_table "watchlists", force: :cascade do |t|
    t.integer "user_id"
    t.integer "shoe_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shoe_id"], name: "index_watchlists_on_shoe_id"
    t.index ["user_id"], name: "index_watchlists_on_user_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
