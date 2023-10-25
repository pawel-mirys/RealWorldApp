import React from 'react';
import clsx from 'clsx';
import ArticleComment from '../../../components/ArticleComment/ArticleComment';
import { useFetchArticleCommentsQuery } from '../../../store';

type ArticleShowCommentsProps = {
  slug: string;
};

const ArticleShowComments: React.FC<ArticleShowCommentsProps> = ({ slug }) => {
  const { data, isFetching, error } = useFetchArticleCommentsQuery(slug);

  if (isFetching) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>Error while loading comments...</div>;
  }

  if (data?.comments.length === 0) {
    return <div className='text-center'>No comments under this article...</div>;
  }

  return (
    <div className={clsx('comments', 'flex flex-col w-2/5 m-auto')}>
      {data?.comments.map((comment) => (
        <ArticleComment key={comment.id} data={comment} />
      ))}
    </div>
  );
};

export default ArticleShowComments;
