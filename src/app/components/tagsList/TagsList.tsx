import { Tag } from 'app/ui/tag/Tag';
import clsx from 'clsx';
import styles from './TagsList.module.scss';
type TagsListProps = {
  inputList: string[];
  className?: string;
  variant: 'articleTag' | 'popularTag' | 'previewTag';
};

export const TagsList = ({ inputList, variant, className }: TagsListProps) => {
  return (
    <div className={clsx(styles.tagList, className)}>
      {inputList.map((item, index) => {
        return (
          <div className={styles.tagContainer} key={index}>
            <Tag variant={variant}>{item}</Tag>
          </div>
        );
      })}
    </div>
  );
};
