require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::MovieResultsResolver
  include SearchObject.module(:graphql)

  type types[Types::MovieResultsType]

  scope { Movie.all.includes(:reviews) }

  option :search, type: types.String, with: :apply_search

  def apply_search(scope, value)
    scope.where("title ilike '%#{value}%'") if value
  end
end

class Resolvers::MovieResolver < Resolvers::MovieResultsResolver
  type types[Types::MovieType]

  scope { Movie.all.includes(:reviews) }

  option :limit, type: types.Int, with: :apply_limit
  option :offset, type: types.Int, with: :apply_offset

  def apply_limit(scope, value)
    scope.limit(value)
  end

  def apply_offset(scope, value)
    scope.offset(value)
  end
end