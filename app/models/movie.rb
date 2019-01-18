class Movie < ApplicationRecord
  has_many :reviews
  has_many :reviewers, through: :reviews, source: :user

  validates :title, :adult, presence: true 
end