import { Button, ButtonGroup } from '@mui/material';
import AbcRoundedIcon from '@mui/icons-material/AbcRounded';

import { LinkButton } from 'app/ui/LinkButton';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <LinkButton to="/" className={styles.logo}>
        <AbcRoundedIcon sx={{ fontSize: 60 }} />
      </LinkButton>

      <ButtonGroup className={styles.navigation}>
        <Button variant="text">
          <LinkButton to="/">Home</LinkButton>
        </Button>
        <Button variant="text">
          <LinkButton to="/login">Login</LinkButton>
        </Button>
        <Button variant="outlined">
          <LinkButton to="/register">Register</LinkButton>
        </Button>
      </ButtonGroup>
    </div>
  );
};
