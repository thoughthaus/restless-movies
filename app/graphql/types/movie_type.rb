class Types::MovieType < Types::BaseObject
  field :id, ID, null: false
  field :title, String, null: true
  field :tagline, String, null: true
  field :budget, Integer, null: true
  field :revenue, Float, null: true
  field :runtime, Float, null: true
  field :description, String, null: true
  field :release_date, String, null: true
  field :adult, Boolean, null: false
  field :reviews, [Types::ReviewType], null: true
end

class Types::MovieResultsType < Types::BaseObject
  field :total_count, Integer, null: false
  field :collection, function: Resolvers::MovieResolver

  def total_count
    object.count
  end
end