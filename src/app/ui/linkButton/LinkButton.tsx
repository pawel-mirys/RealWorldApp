import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import styles from './LinkButton.module.scss';
type LinkButtonProps = {
  to: string;
  children: string | JSX.Element;
  className?: string;
};

export const LinkButton = ({ to, children, className }: LinkButtonProps) => {
  return (
    <NavLink className={clsx(styles.linkButton, className)} to={to}>
      {children}
    </NavLink>
  );
};
