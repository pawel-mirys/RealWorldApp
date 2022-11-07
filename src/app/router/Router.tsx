import { Routes, Route } from 'react-router-dom';

import { routes } from './routes';
import { Home } from 'app/pages/home/Home';
import { SignIn } from 'app/pages/signIn/SignIn';
import { SignUp } from 'app/pages/signUp/SignUp';
import { Preview } from 'app/pages/preview/Preview';

export const RouterSwitch = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.signIn} element={<SignIn />} />
      <Route path={routes.signUp} element={<SignUp />} />
      <Route path={routes.preview} element={<Preview />} />
    </Routes>
  );
};
