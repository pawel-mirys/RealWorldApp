import AbcRounded from '@mui/icons-material/AbcRounded';
import { Button } from '@mui/material';

import { ArticleList } from 'app/components/articleList/ArticleList';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <AbcRounded sx={{ fontSize: 150 }} className={styles.logo} />
        <p className={styles.motto}>A place to share your knowledge.</p>
      </div>
      <div className={styles.articlesContainer}>
        <div className={styles.globalFeed}>
          <div className={styles.feedHeader}>
            <Button>Global Feed</Button>
          </div>
          <div className={styles.articlesList}>{<ArticleList />}</div>
        </div>
        <div className={styles.tags}>
          <p>Popular tags:</p>
          <div className={styles.tagsList}></div>
        </div>
      </div>
    </div>
  );
};
