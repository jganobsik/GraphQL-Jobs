import React, {Component} from 'react';
import logo from './logo.svg';
import ApolloClient from 'apollo-boost';
import './App.css';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri: "https://api.graphql.jobs/"
});

const App = () => (
<ApolloProvider client={client}>
  <div>
    <h1>GraphQL Jobs</h1>
  </div>
</ApolloProvider>
  );


export default App;
