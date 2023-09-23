import { useFetchArticlesQuery } from '../../store';
import { useNavigate } from 'react-router-dom';
import Article from '../Article/Article';
import clsx from 'clsx';
import styles from './ArticleList.module.scss';
const ArticlesList = () => {
  const { data, isFetching, error } = useFetchArticlesQuery();
  const navigate = useNavigate();

  const handleShowArticle = (slug: string) => {
    navigate(`/article/${slug}`);
  };

  let content;

  if (isFetching) {
    content = <div>Loading articles...</div>;
  } else if (error) {
    content = <div>Error while fetching articles {`${error}`}</div>;
  } else {
    content = data?.articles.map((article) => {
      return (
        <Article
          key={`${article.slug}${Math.random()}`}
          article={article}
          onClick={() => handleShowArticle(article.slug)}
        />
      );
    });
  }

  return (
    <div
      className={clsx(
        styles.articleList,
        'article-list',
        'flex flex-col flex-auto gap-5 '
      )}>
      {content}
    </div>
  );
};

export default ArticlesList;
