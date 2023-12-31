/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Skeleton } from '@mui/material';
import Article from '../Article/Article';
import { ArticleData, FetchedArticlesData } from '../../types';
import PaginationBar from '../Pagination/Pagination';
import ScrollUpArrow from '../ScrollUpArrow/ScrollUpArrow';

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
      <Skeleton animation='wave' key={i} height={'150px'} width={'100%'} />
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
    <div className='flex flex-row justify-end items-end w-full'>
      <div className='article-list flex flex-col flex-auto gap-5 mt-5'>
        {content}
        {data && <PaginationBar articlesCount={data.articlesCount} />}
      </div>
      {data && data?.articlesCount > 5 && <ScrollUpArrow />}
    </div>
  );
};

export default ArticlesList;
