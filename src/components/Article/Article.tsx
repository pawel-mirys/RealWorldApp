import { Box, Button } from '@mui/material';
import { ArticleData } from '../../types';
import clsx from 'clsx';
import styles from './Article.module.scss';
import Author from '../Author/Author';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import {
  useLikeArticleMutation,
  useDislikeArticleMutation,
  useAppSelector,
} from '../../store';

type ArticleProps = {
  article: ArticleData;

  className?: string;
};

const Article: React.FC<ArticleProps> = ({ article, className, ...props }) => {
  const [likeArticle] = useLikeArticleMutation();
  const [dislikeArticle] = useDislikeArticleMutation();
  const currentUserData = useAppSelector((state) => state.currentUserState);

  const navigate = useNavigate();

  const handleShowArticle = () => {
    navigate(`/article/${article.slug}`);
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

        {!article.favorited ? (
          <Button
            onClick={() => {
              likeArticle({
                slug: article.slug,
                token: currentUserData.token,
              });
            }}>
            <FavoriteBorderOutlinedIcon sx={{ mr: '5px' }} />
            {`Like Article  | ${article.favoritesCount}`}
          </Button>
        ) : (
          <Button
            onClick={() => {
              dislikeArticle({
                slug: article.slug,
                token: currentUserData.token,
              });
            }}>
            <FavoriteIcon sx={{ mr: '5px' }} />
            {`Dislike Article  | ${article.favoritesCount}`}
          </Button>
        )}
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
