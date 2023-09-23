import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const ArticleShowFooter = () => {
  const navigate = useNavigate();
  return (
    <div className={clsx('article-footer', 'w-auto m-auto')}>
      <span
        onClick={() => {
          navigate('/login');
        }}
        className='text-blue-600 cursor-pointer mr-1'>
        Login
      </span>
      or
      <span
        onClick={() => {
          navigate('/register');
        }}
        className='text-blue-600 cursor-pointer m-1'>
        Register
      </span>
      to see comments.
    </div>
  );
};

export default ArticleShowFooter;
