import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import SongList from './SongList';
import SongCreate from './SongCreate';

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
      </Switch>
    </HashRouter>
  );
};

export default App;
