import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Navbar } from 'app/components/navbar/Navbar';
import './App.scss';
import { RouterSwitch } from 'app/router/RouterSwitch';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <RouterSwitch />
      </HashRouter>
    </div>
  );
}

export default App;
