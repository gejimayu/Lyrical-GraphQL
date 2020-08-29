import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import SongList from './components/SongList';
import AddNewSong from './components/AddNewSong';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Switch>
          <Route path="/song/new">
            <AddNewSong />
          </Route>
          <Route path="/">
            <SongList />
          </Route>
        </Switch>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
