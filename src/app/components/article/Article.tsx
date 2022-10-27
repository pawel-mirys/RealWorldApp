import { LinkButton } from 'app/ui/linkButton/LinkButton';
import { Author } from '../author/Author';
import { Tag } from '../../ui/tag/Tag';
import styles from './Article.module.scss';

type ArticleProps = {
  title: string;
  description: string;
  taglist: string[];
  avatar: string;
  userName: string;
  createdAt: string;
  likesCount: number;
};

export const Article = ({ avatar, userName, createdAt, likesCount, title, description, taglist }: ArticleProps) => {
  return (
    <div className={styles.articleContainer}>
      <Author avatar={avatar} userName={userName} createdAt={createdAt} likesCount={likesCount} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>{description}</div>
      <div className={styles.info}>
        <LinkButton className={styles.readMore} to={'/'}>
          Read more...
        </LinkButton>
        <div className={styles.tagList}>
          {taglist.map((item, index) => {
            return (
              <div className={styles.tagContainer} key={index}>
                <Tag variant="articleTag">{item}</Tag>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
