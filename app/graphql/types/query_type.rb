module Types
  class QueryType < GraphQL::Schema::Object
    description "root query"

    field :movies, [MovieType], null: true do
      description "Return all movies"
    end
  
    def movies
      Movie.all
    end
  end
end
