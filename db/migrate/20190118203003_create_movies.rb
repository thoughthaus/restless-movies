class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.text :description
      t.date :release_date
      t.boolean :adult, null: false, default: false
      t.integer :budget
      t.float :revenue
      t.float :runtime
      t.string :tagline
      t.timestamps
    end
  end
end
