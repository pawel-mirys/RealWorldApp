import styles from './Comment.module.scss';
export const Comment = () => {
  return (
    <div className={styles.comment}>
      <div className={styles.content}>content</div>
      <div className={styles.author}></div>
    </div>
  );
};
