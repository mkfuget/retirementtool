class CreateOptions < ActiveRecord::Migration[6.0]
  def change
    create_table :options do |t|
      t.string :name
      t.integer :initialGain
      t.integer :monthlyGain
      t.integer :dateStarted
      t.integer :duration
      t.belongs_to :choice, null: false, foreign_key: true

      t.timestamps
    end
  end
end
