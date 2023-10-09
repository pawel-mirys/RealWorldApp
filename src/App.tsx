import { HashRouter } from 'react-router-dom';
import RouterSwitch from './router/Router';
import MainNavbar from './components/Navbar/MainNavbar';
import Footer from './components/Footer/Footer';

import {
  updateUserData,
  useAppDispatch,
  useAppSelector,
  useGetCurrentUserDataQuery,
} from './store';
import { useEffect } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';

function App() {
  const token = useAppSelector((state) => state.tokenState.token);
  const dispatch = useAppDispatch();

  const { data } = useGetCurrentUserDataQuery(token ?? skipToken);

  useEffect(() => {
    data && dispatch(updateUserData(data?.user));
  }, [data, dispatch]);

  return (
    <HashRouter>
      <MainNavbar />
      <div className='w-full  text-center m-3'>
        Note: This project is still in the development process... Some features
        may be unavailable or may not work correctly
      </div>
      <RouterSwitch />
      <Footer />
    </HashRouter>
  );
}

export default App;
