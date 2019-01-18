import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";

const Movies = () => (
  <Query
    query={gql`
        {
        movies {
          id
          title
          reviews {
            rating
            comment
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.movies.map(({ title, id, reviews }) => (
        <div key={id}>
          <h2>{title}</h2>
        </div>
      ));
    }}
  </Query>
);

export default Movies