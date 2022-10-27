import clsx from 'clsx';

import styles from './Tag.module.scss';

type TagProps = {
  children: string;
  variant: 'articleTag' | 'popularTag';
};

export const Tag = ({ children, variant }: TagProps) => {
  return (
    <div
      onClick={() => {}}
      className={clsx(styles.tag, variant === 'articleTag' ? styles.articleTag : styles.popularTag)}
    >
      {children}
    </div>
  );
};
