import { Button, ButtonGroup } from '@mui/material';

import styles from './Navbar.module.scss';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

type NavbarContainerProps = {
  pages: string[];
  logo?: JSX.Element;
};

const NavbarContainer: React.FC<NavbarContainerProps> = ({ pages, logo }) => {
  const navigate = useNavigate();

  const mappedPages = pages.map((page) => {
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
  });

  return (
    <nav
      className={clsx(styles.container, 'bg-[#1565C0] w-screen sticky top-0')}>
      <div
        className={clsx(
          'flex flex-row  items-center justify-between gap-2   w-5/6 m-auto overflow-hidden'
        )}>
        {logo}
        <ButtonGroup className={clsx(styles.navigation, 'flex flex-row ')}>
          {mappedPages}
        </ButtonGroup>
      </div>
    </nav>
  );
};

export default NavbarContainer;
