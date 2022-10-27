class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.integer :city_id
      t.string  :title
      t.string  :description
      t.string  :image
      t.string  :category
      t.string  :subcategory
      t.string  :area
      t.integer  :postal_code
      t.integer :price
      t.boolean :hide
      t.boolean :star

      t.timestamps
    end
  end
end
