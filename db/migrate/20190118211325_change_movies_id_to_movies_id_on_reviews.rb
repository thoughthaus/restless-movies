class ChangeMoviesIdToMoviesIdOnReviews < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :movies_id, :movie_id
    rename_column :reviews, :users_id, :user_id
  end
end
