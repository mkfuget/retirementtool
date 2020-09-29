class CreateRetirees < ActiveRecord::Migration[6.0]
  def change
    create_table :retirees do |t|
      t.string :name
      t.string :cashAssets
      t.string :integer
      t.float :expectedRateOfReturn
      t.string :slug

      t.timestamps
    end
  end
end
