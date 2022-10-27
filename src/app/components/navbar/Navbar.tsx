import { Button, ButtonGroup } from '@mui/material';
import AbcRoundedIcon from '@mui/icons-material/AbcRounded';

import { LinkButton } from 'app/ui/linkButton/LinkButton';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <LinkButton to="/" className={styles.logo}>
        <AbcRoundedIcon color="primary" sx={{ fontSize: 60 }} />
      </LinkButton>
      <ButtonGroup className={styles.navigation}>
        <Button variant="text">
          <LinkButton to="/">Home</LinkButton>
        </Button>
        <Button variant="text">
          <LinkButton to="/signIn">Sign In</LinkButton>
        </Button>
        <Button variant="outlined">
          <LinkButton to="/signUp">Sign Up</LinkButton>
        </Button>
      </ButtonGroup>
    </div>
  );
};
