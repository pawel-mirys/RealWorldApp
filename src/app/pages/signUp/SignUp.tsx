import { AuthForm } from 'app/components/forms/auth/AuthForm';
import { LinkButton } from 'app/ui/linkButton/LinkButton';
import styles from './SignUp.module.scss';

export const SignUp = () => {
  return (
    <div className={styles.pageContainer}>
      <h2>Sign Up</h2>
      <div>
        <LinkButton to="/signIn">Have an account?</LinkButton>
      </div>
      <AuthForm variant="signUp" />
    </div>
  );
};
