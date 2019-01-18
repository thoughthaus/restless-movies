class User < ApplicationRecord
  has_many :reviews
  has_many :reviewed_movies, through: :reviews, source: :movie

  validates :username, :email, presence: true
end