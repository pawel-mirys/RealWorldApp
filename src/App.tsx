import { BrowserRouter } from 'react-router-dom';
import RouterSwitch from './router/Router';
import MainNavbar from './components/Navbar/MainNavbar';

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <RouterSwitch />
    </BrowserRouter>
  );
}

export default App;
