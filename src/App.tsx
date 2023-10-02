import { HashRouter } from 'react-router-dom';
import RouterSwitch from './router/Router';
import MainNavbar from './components/Navbar/MainNavbar';

function App() {
  return (
    <HashRouter>
      <MainNavbar />
      <RouterSwitch />
    </HashRouter>
  );
}

export default App;
