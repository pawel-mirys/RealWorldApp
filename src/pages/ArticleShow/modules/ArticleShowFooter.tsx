import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import useAuthStatus from '../../../hooks/useAuthStatus';
import CommentForm from '../../../components/CommentForm/CommentForm';

type ArticleShowFooterProps = {
  slug: string;
};

const ArticleShowFooter: React.FC<ArticleShowFooterProps> = ({ slug }) => {
  const isLoggedIn = useAuthStatus();
  const navigate = useNavigate();

  const renderedContent = (): JSX.Element => {
    let content: JSX.Element;
    if (!isLoggedIn) {
      content = (
        <div>
          <span
            onClick={() => navigate('/signin')}
            className='text-blue-600 cursor-pointer mr-1'>
            Sign In
          </span>
          or
          <span
            onClick={() => navigate('/signup')}
            className='text-blue-600 cursor-pointer m-1'>
            Sign Up
          </span>
          to add comments on this article.
        </div>
      );
    } else {
      content = <CommentForm slug={slug} />;
    }
    return content;
  };

  return (
    <div
      className={clsx(
        'article-footer',
        'flex items-center justify-center lg:w-3/6 lg:mx-auto mx-4 '
      )}>
      {renderedContent()}
    </div>
  );
};

export default ArticleShowFooter;
