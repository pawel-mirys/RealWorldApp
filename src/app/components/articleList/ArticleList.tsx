import styles from './ArticleList.module.scss';
import { useArticleContext } from 'app/contexts/ArticleContext';
import { Article } from '../article/Article';
export const ArticleList = () => {
  const context = useArticleContext();
  let listItem = context?.articleList.map((item, index) => {
    return (
      <div className={styles.listItem} key={index}>
        <Article
          avatar={item.author.image}
          userName={item.author.userName}
          createdAt={item.createdAt}
          likesCount={item.favouritesCount}
          title={item.title}
          description={item.description}
          taglist={item.tagList}
        />
      </div>
    );
  });
  return <div className={styles.articleList}>{listItem}</div>;
};
