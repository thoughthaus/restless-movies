class User < ApplicationRecord
  has_many :reviews
  has_many :reviewed_movies, through: :reviews

  validates :user_name, :email, presence: true
end