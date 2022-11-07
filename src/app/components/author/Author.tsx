import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Button } from '@mui/material';
import clsx from 'clsx';

import styles from './Author.module.scss';
export type AuthorProps = {
  avatar: string;
  userName: string;
  createdAt: string;
  likesCount: number;
  className?: string;
  variant: 'article' | 'preview';
};

export const Author = ({ avatar, userName, createdAt, likesCount, variant, className }: AuthorProps) => {
  return (
    <div className={clsx(styles.author, variant === 'article' ? styles.dark : styles.light, className)}>
      <div className={styles.infoContainer}>
        <Avatar alt={userName} src={avatar} />
        <div className={styles.info}>
          <div className={styles.userName}>{userName}</div>
          <div className={styles.createdAt}>{createdAt}</div>
        </div>
      </div>
      <div className={styles.controls}>
        {variant === 'preview' && (
          <Button className={styles.follow} variant="outlined" color="inherit">
            Follow {userName} <AddIcon />
          </Button>
        )}
        <Button className={styles.likeButton} variant="outlined">
          {`${likesCount}`} <FavoriteIcon />
        </Button>
      </div>
    </div>
  );
};
