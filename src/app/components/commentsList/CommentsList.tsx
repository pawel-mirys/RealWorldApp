import { useApiContext } from 'app/contexts/ApiContext';
import { LinkButton } from 'app/ui/linkButton/LinkButton';
import { Author } from '../author/Author';
import styles from './CommentsList.module.scss';

export const CommentsList = () => {
  const context = useApiContext();

  return (
    <div className={styles.commentsContainer}>
      <div className={styles.message}>
        <LinkButton className={styles.link} to="/signIn">
          Sign In
        </LinkButton>
        <p> or</p>
        <LinkButton className={styles.link} to="/signUp">
          Sign Up
        </LinkButton>
        <p>to add some comments.</p>
      </div>
      <div className={styles.commentsList}></div>
    </div>
  );
};
