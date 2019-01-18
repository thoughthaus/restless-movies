class Types::UserType < Types::BaseObject
  field :id, ID, null: false
  field :username, String, null: true
  field :email, String, null: true
end