/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: movies
// ====================================================

export interface movies_movies_reviews {
  __typename: "Review";
  id: string;
  rating: number;
  comment: string | null;
}

export interface movies_movies {
  __typename: "Movie";
  id: string;
  title: string | null;
  reviews: movies_movies_reviews[] | null;
}

export interface movies {
  /**
   * Return all movies
   */
  movies: movies_movies[] | null;
}
