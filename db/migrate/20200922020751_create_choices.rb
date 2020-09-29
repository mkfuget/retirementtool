class CreateChoices < ActiveRecord::Migration[6.0]
  def change
    create_table :choices do |t|
      t.string :name
      t.integer :activeChoice
      t.belongs_to :configuration, null: false, foreign_key: true

      t.timestamps
    end
  end
end
