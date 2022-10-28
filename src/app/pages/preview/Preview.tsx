import { useApiContext } from 'app/contexts/ApiContext';
import styles from './Preview.module.scss';

export const Preview = () => {
  const context = useApiContext();

  return (
    <div className={styles.previewContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>{context?.articlepreview.title!}</h1>
        <div className={styles.controls}></div>
      </div>
      <div className={styles.description}>
        <p></p>
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.commentsControls}></div>
        <div className={styles.message}></div>
        <div className={styles.comments}></div>
      </div>
    </div>
  );
};
