import NavbarContainer from './NavbarContainer';
import AbcIcon from '@mui/icons-material/Abc';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
const MainNavbar = () => {
  const navigate = useNavigate();

  const pages = ['sign in', 'sign up'];
  const logo = (
    <div
      className={clsx(styles.logoContainer, 'cursor-pointer')}
      onClick={() => {
        navigate('/');
      }}>
      <AbcIcon sx={{ color: 'white' }} className={clsx(styles.logo)} />
    </div>
  );
  return <NavbarContainer pages={pages} logo={logo} />;
};

export default MainNavbar;
