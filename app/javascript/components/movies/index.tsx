import { Query } from "react-apollo";
import gql from "graphql-tag";
import * as React from "react";
import ReactPaginate from "react-paginate";
import { movies as MoviesType } from "./__generated__/Movies";

class MoviesQuery extends Query<MoviesType> {}

class Movies extends React.Component {
  state = {
    search: null,
    limit: 5,
    offset: 0
  };

  handlePageClick = (data, fetchMore) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.limit);

    this.setState({ offset }, () => {
      fetchMore({
        variables: {
          offset
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return fetchMoreResult;
        }
      });
    });
  };

  render() {
    const { search, limit, offset } = this.state;

    return (
      <>
        <input onChange={e => this.setState({ search: e.target.value })} />
        <MoviesQuery
          query={gql`
            query movies($search: String, $limit: Int!, $offset: Int!) {
              movies(search: $search) {
                totalCount
                collection(limit: $limit, offset: $offset) {
                  id
                  title
                  reviews {
                    id
                    rating
                    comment
                  }
                }
              }
            }
          `}
          variables={{
            search,
            limit,
            offset
          }}
        >
          {({ loading, error, data, fetchMore }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return (
              <>
                {data.movies.collection.map(({ title, id, reviews }) => (
                  <div key={id}>
                    <h2>{title}</h2>
                    {reviews.map(({ rating, id: reviewId }) => (
                      <li key={reviewId}>Rating: {rating}</li>
                    ))}
                  </div>
                ))}
                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  pageCount={data.movies.totalCount / limit}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={pageData =>
                    this.handlePageClick(pageData, fetchMore)
                  }
                />
              </>
            );
          }}
        </MoviesQuery>
      </>
    );
  }
}

export default Movies;
