# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_15_073349) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "choices", force: :cascade do |t|
    t.string "name"
    t.integer "activeChoice"
    t.bigint "configuration_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["configuration_id"], name: "index_choices_on_configuration_id"
  end

  create_table "configurations", force: :cascade do |t|
    t.string "name"
    t.bigint "retiree_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["retiree_id"], name: "index_configurations_on_retiree_id"
  end

  create_table "options", force: :cascade do |t|
    t.string "name"
    t.integer "initialGain"
    t.integer "monthlyGain"
    t.integer "dateStarted"
    t.integer "duration"
    t.bigint "choice_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["choice_id"], name: "index_options_on_choice_id"
  end

  create_table "puzzles", force: :cascade do |t|
    t.string "name"
    t.string "author"
    t.integer "ratingsum"
    t.integer "numratings"
    t.string "difficulty"
    t.string "data"
    t.string "slug"
    t.bigint "puzzletype_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["puzzletype_id"], name: "index_puzzles_on_puzzletype_id"
  end

  create_table "puzzletypes", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "retirees", force: :cascade do |t|
    t.string "name"
    t.string "cashAssets"
    t.string "integer"
    t.float "expectedRateOfReturn"
    t.string "slug"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "choices", "configurations"
  add_foreign_key "configurations", "retirees"
  add_foreign_key "options", "choices"
  add_foreign_key "puzzles", "puzzletypes"
end
