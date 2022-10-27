import styles from './ArticleList.module.scss';
import { useApiContext } from 'app/contexts/ApiContext';
import { Article } from '../article/Article';
export const ArticleList = () => {
  const context = useApiContext();
  let listItem = context?.articleList.map((item, index) => {
    return (
      <div className={styles.listItem} key={index}>
        <Article
          avatar={item.author.image}
          userName={item.author.username}
          createdAt={item.createdAt}
          likesCount={item.favoritesCount}
          title={item.title}
          description={item.description}
          taglist={item.tagList}
        />
      </div>
    );
  });
  return <div className={styles.articleList}>{listItem}</div>;
};
