class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable,
         :registerable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :reviews
  has_many :reviewed_movies, through: :reviews, source: :movie

  validates :username, :email, presence: true
end