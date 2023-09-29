import { Box } from '@mui/material';
import { ArticleData } from '../../types';
import clsx from 'clsx';
import styles from './Article.module.scss';
import Author from '../Author/Author';

type ArticleProps = {
  article: ArticleData;
  onClick: () => void;
  className?: string;
};

const Article: React.FC<ArticleProps> = ({
  article,
  onClick,
  className,
  ...props
}) => {
  return (
    <Box
      {...props}
      className={clsx(
        styles.article,
        ' flex flex-col flex-grow-1 gap-2',
        className
      )}>
      <Author authorData={article.author} createdAt={article.createdAt} />
      <div
        className={clsx(
          styles.articleContent,
          'article-content cursor-pointer flex flex-col gap-3'
        )}
        onClick={onClick}>
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
