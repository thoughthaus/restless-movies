class Movie < ApplicationRecord
  has_many :reviews
  has_many :reviewers, through: :reviews

  validates :title, :adult, presence: true 
end