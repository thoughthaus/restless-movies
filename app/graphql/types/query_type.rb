module Types
  class QueryType < GraphQL::Schema::Object
    description "root query"

    field :movies, [MovieType], null: true do
      description "Return all movies"
    end

    def movies
      Movie.all
    end

    field :reviews, [ReviewType], null: true do
      description "Return reviews for a user"
    end

    def reviews
      context[:current_user].reviews
    end

    field :review, ReviewType, null: true do
      description "Return a single review only if current user owns it"
      argument :id, ID, required: true
    end

    def review(id:)
      review = Review.find(id)
      context[:pundit].send(:authorize, review, :show?)
    end
  end
end
