import NavbarContainer from './NavbarContainer';
import AbcIcon from '@mui/icons-material/Abc';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuthStatus from '../../hooks/useAuthStatus';
import AccountMenu from '../AccountMenu/AccountMenu';

const MainNavbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStatus();

  const renderedPages = () => {
    const pages = ['sign in', 'sign up'];

    if (isLoggedIn) {
      return (
        <>
          <AccountMenu />
        </>
      );
    } else {
      return (
        <>
          {pages.map((page) => {
            const handleNavigate = () => {
              const modifiedPageUrl = page.replace(/\s+/g, '');
              navigate(`/${modifiedPageUrl}`);
            };
            return (
              <Button
                key={page}
                sx={{ color: 'white' }}
                variant='outlined'
                color='inherit'
                onClick={handleNavigate}>
                {page}
              </Button>
            );
          })}
        </>
      );
    }
  };

  const logo = (
    <div
      className={clsx(styles.logoContainer, 'cursor-pointer')}
      onClick={() => {
        navigate('/');
      }}>
      <AbcIcon sx={{ color: 'white' }} className={clsx(styles.logo)} />
    </div>
  );
  return <NavbarContainer pages={renderedPages()} logo={logo} />;
};

export default MainNavbar;
