import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Profile from '../pages/Profile/Profile';
import ArticleShow from '../pages/ArticleShow/ArticleShow';

const RouterSwitch = () => {
  return (
    <Routes>
      <Route path='/article/:slug' element={<ArticleShow />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profiles/:username' element={<Profile />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default RouterSwitch;
