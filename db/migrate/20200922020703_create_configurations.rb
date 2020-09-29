class CreateConfigurations < ActiveRecord::Migration[6.0]
  def change
    create_table :configurations do |t|
      t.string :name
      t.belongs_to :retiree, null: false, foreign_key: true

      t.timestamps
    end
  end
end
