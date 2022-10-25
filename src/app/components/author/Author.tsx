import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';

import styles from './Author.module.scss';
export type AuthorProps = {
  avatar: string;
  userName: string;
  createdAt: string;
  likesCount: string;
};

export const Author = ({ avatar, userName, createdAt, likesCount }: AuthorProps) => {
  return (
    <div className={styles.author}>
      <div className={styles.avatar}>{avatar}</div>
      <div className={styles.userName}>{userName}</div>
      <div className={styles.createdAt}>{createdAt}</div>
      <div className={styles.likesCount}>
        <Button>
          {likesCount} <FavoriteIcon />
        </Button>
      </div>
    </div>
  );
};
