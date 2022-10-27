class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :default_city
      t.string :saved
      t.string :hidden

      t.timestamps
    end
  end
end
