module Mutations
  class CreateReview < Mutations::BaseMutation
    argument :movie_id, ID, required: true
    argument :rating, Float, required: true
    argument :comment, String, required: false

    type Types::ReviewType

    def resolve(movie_id:, rating:, comment: nil)
      Review.create!(
        movie_id: movie_id,
        rating: rating,
        user: context[:current_user],
        comment: comment
      )
    end
  end
end