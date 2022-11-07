import { useNavigate } from 'react-router-dom';

import { LinkButton } from 'app/ui/linkButton/LinkButton';
import { Author } from '../author/Author';
import { Tag } from '../../ui/tag/Tag';
import styles from './Article.module.scss';
import { useApiContext } from 'app/contexts/ApiContext';
import { TagsList } from '../tagsList/TagsList';

type ArticleProps = {
  slug: string;
  title: string;
  description: string;
  taglist: string[];
  avatar: string;
  userName: string;
  createdAt: string;
  likesCount: number;
};

export const Article = ({
  avatar,
  userName,
  createdAt,
  likesCount,
  slug,
  title,
  description,
  taglist,
}: ArticleProps) => {
  const context = useApiContext();
  const navigate = useNavigate();
  return (
    <div className={styles.articleContainer}>
      <Author variant="article" avatar={avatar} userName={userName} createdAt={createdAt} likesCount={likesCount} />
      <h3
        onClick={() => {
          context?.updateArticlePreview(slug, title, description, taglist, userName, createdAt, avatar, likesCount);
          navigate('/preview');
        }}
        className={styles.title}
      >
        {title}
      </h3>
      <div className={styles.description}>{description}</div>
      <div className={styles.info}>
        <LinkButton className={styles.readMore} to={'/'}>
          Read more...
        </LinkButton>
        <TagsList inputList={taglist} variant="articleTag" />
      </div>
    </div>
  );
};
