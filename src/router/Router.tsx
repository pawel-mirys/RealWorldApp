import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Profile from '../pages/Profile/Profile';
import ArticleShow from '../pages/ArticleShow/ArticleShow';

const RouterSwitch = () => {
  return (
    <Routes>
      <Route path='/article/:slug' element={<ArticleShow />} />
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/profiles/:username' element={<Profile />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default RouterSwitch;
