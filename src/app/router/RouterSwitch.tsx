import { Routes, Route } from 'react-router-dom';

import { Home } from 'app/pages/home/Home';
import { routes } from './routes';
import { SignIn } from 'app/pages/signIn/SignIn';
import { SignUp } from 'app/pages/signUp/SignUp';

export const RouterSwitch = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.signIn} element={<SignIn />} />
      <Route path={routes.signUp} element={<SignUp />} />
    </Routes>
  );
};
