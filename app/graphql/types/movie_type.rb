class Types::MovieType < Types::BaseObject
  field :id, ID, null: false
  field :title, String, null: true
  field :tagline, String, null: true
  field :budget, Integer, null: true
  field :revenue, Float, null: true
  field :runtime, Float, null: true
  field :description, String, null: true
  field :release_date, Date, null: true
  field :adult, Boolean, null: false
  field :reviews, [ReviewType], null: true
end