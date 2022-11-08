import { Author } from 'app/components/author/Author';
import { CommentsList } from 'app/components/commentsList/CommentsList';
import { TagsList } from 'app/components/tagsList/TagsList';
import { useApiContext } from 'app/contexts/ApiContext';
import styles from './Preview.module.scss';

export const Preview = () => {
  const context = useApiContext();

  return (
    <div className={styles.previewContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>{context?.articlepreview.title}</h1>
        <div className={styles.controls}>
          <Author
            className={styles.author}
            variant="preview"
            avatar={context?.articlepreview.image!}
            userName={context?.articlepreview.username!}
            createdAt={context?.articlepreview.createdAt!}
            likesCount={context?.articlepreview.favoritesCount!}
          />
        </div>
      </div>
      <div className={styles.description}>
        <p>{context?.articlepreview.description}</p>
        <TagsList className={styles.tagList} inputList={context?.articlepreview.tagList!} variant="previewTag" />
      </div>
      <CommentsList />
    </div>
  );
};
