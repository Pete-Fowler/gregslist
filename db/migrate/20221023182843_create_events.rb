class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.integer :user_id
      t.integer :city_id
      t.string  :title
      t.date  :date
      t.integer :duration
      t.string  :description
      t.string  :image
      t.string  :category
      t.string  :subcategory
      t.string  :area
      t.integer  :postal_code
      t.integer  :price

      t.timestamps
    end
  end
end
