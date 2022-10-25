import { LinkButton } from 'app/ui/linkButton/LinkButton';
import { Author, AuthorProps } from '../author/Author';
import styles from './Article.module.scss';

type ArticleProps = {
  title: string;
  description: string;
  taglist: string[];
  avatar: string;
  userName: string;
  createdAt: string;
  likesCount: string;
};

export const Article = (
  { avatar, userName, createdAt, likesCount, title, description, taglist }: ArticleProps,
  props: AuthorProps,
) => {
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
          <ul>
            {taglist.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
