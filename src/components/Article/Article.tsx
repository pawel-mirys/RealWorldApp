import { Box, Button } from '@mui/material';
import { ArticleData } from '../../types';
import clsx from 'clsx';
import styles from './Article.module.scss';
import Author from '../Author/Author';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

type ArticleProps = {
  article: ArticleData;

  className?: string;
};

const Article: React.FC<ArticleProps> = ({ article, className, ...props }) => {
  const navigate = useNavigate();

  const handleShowArticle = () => {
    navigate(`/article/${article.slug}`);
  };

  const handleLikeArticle = () => {
    console.log('liked');
  };

  return (
    <Box
      {...props}
      className={clsx(
        styles.article,
        ' flex flex-col flex-grow-1 gap-2',
        className
      )}>
      <div className='flex flex-row justify-between align-center w-full'>
        <Author authorData={article.author} createdAt={article.createdAt} />
        <Button onClick={handleLikeArticle}>
          <FavoriteIcon sx={{ width: '16px' }} />
          <span className='ml-1'>{`(${article.favoritesCount})`}</span>
        </Button>
      </div>
      <div
        className={clsx(
          styles.articleContent,
          'article-content cursor-pointer flex flex-col gap-3'
        )}
        onClick={handleShowArticle}>
        <h2
          className={clsx(
            styles.articleTitle,
            'article-title',
            'text-lg font-bold '
          )}>
          {article.title}
        </h2>
        <div className={clsx('article-description text-sm')}>
          {article.description}
        </div>
      </div>
    </Box>
  );
};

export default Article;
