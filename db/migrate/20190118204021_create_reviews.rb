class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.references :users, null: false
      t.references :movies, null: false
      t.float :rating, null: false
      t.string :comment

      t.timestamps
    end
  end
end
