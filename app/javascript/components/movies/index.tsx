import { Query } from "react-apollo";
import gql from "graphql-tag";
import * as React from "react";
import { movies as MoviesType } from "./__generated__/Movies";

class MoviesQuery extends Query<MoviesType> {}

class Movies extends React.Component {
  state = {
    search: null
  };

  render() {
    const { search } = this.state;

    return (
      <>
        <input onChange={e => this.setState({ search: e.target.value })} />
        <MoviesQuery
          query={gql`
            query movies($search: String) {
              movies(search: $search) {
                id
                title
                reviews {
                  id
                  rating
                  comment
                }
              }
            }
          `}
          variables={{ search }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.movies.map(({ title, id, reviews }) => (
              <div key={id}>
                <h2>{title}</h2>
                {reviews.map(({ rating, id: reviewId }) => (
                  <li key={reviewId}>Rating: {rating}</li>
                ))}
              </div>
            ));
          }}
        </MoviesQuery>
      </>
    );
  }
}

export default Movies;
