import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Profile from '../pages/Profile/Profile';
import ArticleShow from '../pages/ArticleShow/ArticleShow';
import useAuthStatus from '../hooks/useAuthStatus';

const RouterSwitch = () => {
  const isLoggedIn = useAuthStatus();

  return (
    <Routes>
      <Route path='/article/:slug' element={<ArticleShow />} />
      <Route path='/profiles/:username' element={<Profile />} />
      <Route
        path='/signin'
        element={isLoggedIn ? <Navigate to={'/'} /> : <Login />}
      />
      <Route
        path='/signup'
        element={isLoggedIn ? <Navigate to={'/'} /> : <SignUp />}
      />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default RouterSwitch;
