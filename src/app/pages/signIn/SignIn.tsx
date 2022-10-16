import { AuthForm } from 'app/components/forms/auth/AuthForm';
import { LinkButton } from 'app/ui/linkButton/LinkButton';
import styles from './SignIn.module.scss';

export const SignIn = () => {
  return (
    <div className={styles.pageContainer}>
      <h2>Sign In</h2>
      <div>
        <LinkButton className={styles.link} to="/signIn">
          Need an account?
        </LinkButton>
      </div>
      <AuthForm variant="signIn" />
    </div>
  );
};
