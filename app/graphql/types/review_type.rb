class Types::ReviewType < Types::BaseObject
  field :id, ID, null: false
  field :comment, String, null: true
  field :rating, Float, null: false
  field :user, Types::UserType, null: false
  field :movie, Types::MovieType, null: false
end