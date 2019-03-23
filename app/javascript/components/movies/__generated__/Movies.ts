/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: movies
// ====================================================

export interface movies_movies_collection_reviews {
  __typename: "Review";
  id: string;
  rating: number;
  comment: string | null;
}

export interface movies_movies_collection {
  __typename: "Movie";
  id: string;
  title: string | null;
  reviews: movies_movies_collection_reviews[] | null;
}

export interface movies_movies {
  __typename: "MovieResults";
  totalCount: number;
  collection: (movies_movies_collection | null)[] | null;
}

export interface movies {
  movies: movies_movies;
}

export interface moviesVariables {
  search?: string | null;
  limit: number;
  offset: number;
}
