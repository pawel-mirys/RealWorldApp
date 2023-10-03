import clsx from 'clsx';
import styles from './ArticleList.module.scss';
import { ArticleData, FetchedArticlesData } from '../../types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';
import Article from '../Article/Article';

type ArticleListProps = {
  data: FetchedArticlesData | undefined;
  isFetching: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

const ArticlesList: React.FC<ArticleListProps> = ({
  data,
  isFetching,
  error,
}) => {
  let content;

  if (isFetching) {
    content = <div>Loading articles...</div>;
  } else if (error) {
    content = <div>Error while fetching articles {`${error}`}</div>;
  } else {
    content = data?.articles.map((article: ArticleData) => {
      return (
        <Article key={`${article.slug}${Math.random()}`} article={article} />
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
