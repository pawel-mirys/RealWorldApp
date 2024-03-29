import React from 'react';
import clsx from 'clsx';
import ArticleComment from '../../../components/ArticleComment/ArticleComment';
import { useAppSelector, useFetchArticleCommentsQuery } from '../../../store';
import ScrollUpArrow from '../../../components/ScrollUpArrow/ScrollUpArrow';

type ArticleShowCommentsProps = {
  slug: string;
};

const ArticleShowComments: React.FC<ArticleShowCommentsProps> = ({ slug }) => {
  const currentUserData = useAppSelector((state) => state.currentUserState);
  const { data, isFetching, error } = useFetchArticleCommentsQuery({
    slug: slug,
    token: currentUserData.token,
  });

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
    <div className='flex flex-row justify-center items-end w-full m-auto'>
      <div className={clsx('comments', 'flex flex-col lg:w-2/5 mx-4')}>
        {data?.comments.map((comment) => (
          <ArticleComment key={comment.id} slug={slug} data={comment} />
        ))}
      </div>
      <ScrollUpArrow />
    </div>
  );
};

export default ArticleShowComments;
