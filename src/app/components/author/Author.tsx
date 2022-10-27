import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar, Button } from '@mui/material';

import styles from './Author.module.scss';
export type AuthorProps = {
  avatar: string;
  userName: string;
  createdAt: string;
  likesCount: number;
};

export const Author = ({ avatar, userName, createdAt, likesCount }: AuthorProps) => {
  return (
    <div className={styles.author}>
      <div className={styles.infoContainer}>
        <Avatar alt={userName} src={avatar} />
        <div className={styles.info}>
          <div className={styles.userName}>{userName}</div>
          <div className={styles.createdAt}>{createdAt}</div>
        </div>
      </div>
      <div className={styles.likesCount}>
        <Button className={styles.likeButton}>
          {`${likesCount}`} <FavoriteIcon />
        </Button>
      </div>
    </div>
  );
};
