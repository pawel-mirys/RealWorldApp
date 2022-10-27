import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Navbar } from 'app/components/navbar/Navbar';
import './App.scss';
import { RouterSwitch } from 'app/router/RouterSwitch';
import { ApiProvider } from 'app/contexts/ApiContext';

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <HashRouter>
          <Navbar />
          <RouterSwitch />
        </HashRouter>
      </ApiProvider>
    </div>
  );
}

export default App;
