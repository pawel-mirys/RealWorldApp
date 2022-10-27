import { useApiContext } from 'app/contexts/ApiContext';
import { Tag } from '../tag/Tag';
import styles from './PopularTags.module.scss';

export const PopularTags = () => {
  const context = useApiContext();
  return (
    <div className={styles.tags}>
      <p>Popular tags:</p>
      <div className={styles.tagsList}>
        {context?.popularTags.map((item, index) => {
          return (
            <div className={styles.tagContainer} key={index}>
              <Tag variant="popularTag">{item}</Tag>
            </div>
          );
        })}
      </div>
    </div>
  );
};
