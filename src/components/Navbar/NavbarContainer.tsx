import { ButtonGroup } from '@mui/material';

import styles from './Navbar.module.scss';

import clsx from 'clsx';

type NavbarContainerProps = {
  pages: JSX.Element;
  logo?: JSX.Element;
};

const NavbarContainer: React.FC<NavbarContainerProps> = ({ pages, logo }) => {
  return (
    <nav
      className={clsx(
        styles.container,
        'bg-[#1565C0] w-screen sticky top-0 z-100'
      )}>
      <div
        className={clsx(
          'flex flex-row  items-center justify-between gap-2 w-4/6 m-auto overflow-hidden'
        )}>
        {logo}
        <ButtonGroup className={clsx(styles.navigation, 'flex flex-row ')}>
          {pages}
        </ButtonGroup>
      </div>
    </nav>
  );
};

export default NavbarContainer;
