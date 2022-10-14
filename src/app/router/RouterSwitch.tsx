import { Routes, Route } from 'react-router-dom';

import { Home } from 'app/pages/home/Home';
import { routes } from './routes';

export const RouterSwitch = () => {
  return (
    <Routes>
      <Route />
      <Route path={routes.home} element={<Home />} />
    </Routes>
  );
};
