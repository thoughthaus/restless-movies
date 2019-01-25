import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history/createBrowserHistory";
import { initReactDevise } from "react-devise";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import MoviesList from "../components/movies";

const getConfig = initReactDevise();
const csrfToken = document
  .querySelector("meta[name=csrf-token]")
  .getAttribute("content");

const client = new ApolloClient({
  uri: "/graphql",
  headers: {
    "X-CSRF-Token": csrfToken
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <Router history={createBrowserHistory()}>
      <Switch />
    </Router>
    <div>
      <MoviesList />
    </div>
  </ApolloProvider>
);

render(<App />, document.body.appendChild(document.createElement("div")));
