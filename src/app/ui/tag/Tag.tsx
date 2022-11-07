import clsx from 'clsx';

import styles from './Tag.module.scss';

type TagProps = {
  children: string;
  variant: 'articleTag' | 'popularTag' | 'previewTag';
  className?: string;
};

export const Tag = ({ children, variant, className }: TagProps) => {
  return (
    <div
      onClick={() => {}}
      className={clsx(
        styles.tag,
        className,
        variant === 'articleTag' && styles.articleTag,
        variant === 'popularTag' && styles.popularTag,
        variant === 'previewTag' && styles.previewTag,
      )}
    >
      {children}
    </div>
  );
};
