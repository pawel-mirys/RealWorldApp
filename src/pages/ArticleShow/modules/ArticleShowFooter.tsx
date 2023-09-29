import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const ArticleShowFooter = () => {
  const navigate = useNavigate();
  return (
    <div className={clsx('article-footer', 'w-auto m-auto')}>
      <span
        onClick={() => {
          navigate('/signin');
        }}
        className='text-blue-600 cursor-pointer mr-1'>
        Sign In
      </span>
      or
      <span
        onClick={() => {
          navigate('/signup');
        }}
        className='text-blue-600 cursor-pointer m-1'>
        Sign Up
      </span>
      to add comments on this article.
    </div>
  );
};

export default ArticleShowFooter;
