/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Skeleton } from '@mui/material';
import Article from '../Article/Article';
import { ArticleData, FetchedArticlesData } from '../../types';

type ArticleListProps = {
  data: FetchedArticlesData | undefined;
  isFetching: boolean;
  error: any;
};

const ArticlesList: React.FC<ArticleListProps> = ({
  data,
  isFetching,
  error,
}) => {
  let content;

  if (isFetching) {
    const skeletons = Array.from({ length: 10 }, (_, i) => (
      <Skeleton animation='wave' key={i} height={'150px'} />
    ));
    content = skeletons;
  } else if (error) {
    content = <div>Error while fetching articles...</div>;
  } else {
    content = data?.articles.map((article: ArticleData) => (
      <Article key={article.slug} article={article} />
    ));
  }

  return (
    <div className='article-list flex flex-col flex-auto gap-5 mt-5'>
      {content}
    </div>
  );
};

export default ArticlesList;
