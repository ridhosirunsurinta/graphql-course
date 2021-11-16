import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import SongList from './SongList';
import SongCreate from './SongCreate';
import SongDetail from './SongDetail';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={SongList}
        />
        <Route
          path="/song/new"
          component={SongCreate}
        />
        <Route
          path="/song/:id"
          component={SongDetail}
        />
      </Switch>
    </HashRouter>
  );
};

export default App;
