import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Profile from '../pages/Profile/Profile';
import ArticleShow from '../pages/ArticleShow/ArticleShow';
import useAuthStatus from '../hooks/useAuthStatus';

const RouterSwitch = () => {
  const isLoggedIn = useAuthStatus();

  const renderOrRedirect = (component: JSX.Element) => {
    if (isLoggedIn) {
      return <Home />;
    } else {
      return component;
    }
  };

  return (
    <Routes>
      <Route path='/article/:slug' element={<ArticleShow />} />
      <Route path='/profiles/:username' element={<Profile />} />
      <Route path='/signin' element={renderOrRedirect(<Login />)} />
      <Route path='/signup' element={renderOrRedirect(<SignUp />)} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default RouterSwitch;
