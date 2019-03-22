require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::MovieResolver
  include SearchObject.module(:graphql)

  type types[Types::MovieType]

  scope { Movie.all }

  option(:search, type: types.String) { |scope, value| scope.where("title ilike '%#{value}%'") if value}
end