import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SongList from './SongList';
import SongCreate from './SongCreate';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/" element={<SongList />}
        />
        <Route
          path="/song/new" element={<SongCreate />}
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
