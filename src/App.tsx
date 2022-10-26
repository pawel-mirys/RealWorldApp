import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Navbar } from 'app/components/navbar/Navbar';
import './App.scss';
import { RouterSwitch } from 'app/router/RouterSwitch';
import { ArticleContextProvider } from 'app/contexts/ArticleContext';

function App() {
  return (
    <div className="App">
      <ArticleContextProvider>
        <HashRouter>
          <Navbar />
          <RouterSwitch />
        </HashRouter>
      </ArticleContextProvider>
    </div>
  );
}

export default App;
