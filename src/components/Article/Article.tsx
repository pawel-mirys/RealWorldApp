import { Box } from '@mui/material';
import { Article as ArticleData } from '../../types';
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
      <Author article={article} />
      <div className={clsx('article-content cursor-pointer')} onClick={onClick}>
        <h2 className={clsx('article-title', 'text-lg font-bold')}>
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
