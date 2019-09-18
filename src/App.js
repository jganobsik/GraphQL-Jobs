import React, {Component} from 'react';
import logo from './logo.svg';
import ApolloClient, { gql } from 'apollo-boost';
import './App.css';
import {ApolloProvider} from 'react-apollo';


const client = new ApolloClient({
  uri: "https://api.graphql.jobs/"
});

client.query({query: gql`{
cities {
  name
jobs{
title
applyUrl
company{
  name
  websiteUrl
}
}
}
}
`
}).then(r => console.log(r))
const App = () => (
<ApolloProvider client={client}>
  <div>
    <h1>GraphQL Jobs</h1>
  </div>
</ApolloProvider>
  );


export default App;
