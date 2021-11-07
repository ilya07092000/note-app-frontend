import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { MainContextProvider } from './common/context/main';
import App from './App';

const url = process.env.REACT_APP_API_URL;
const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: url,
  cache,
  connectToDevTools: true,
});

ReactDOM.render(
  <MainContextProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </MainContextProvider>,
  document.getElementById('root'),
);
