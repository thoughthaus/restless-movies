import React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "react-apollo";

import ApolloClient from "apollo-boost";

import MoviesList from '../components/movies'

const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');

const client = new ApolloClient({
  uri: "/graphql",
  headers: {
    'X-CSRF-Token': csrfToken
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <MoviesList />
    </div>
  </ApolloProvider>
);

render(<App />, document.body.appendChild(document.createElement('div')));

// render(<App />, document.getElementById("root"));