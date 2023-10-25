import React from 'react';
import clsx from 'clsx';
import { ArticleData } from '../../../types';
import Author from '../../../components/Author/Author';
import { Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

type ArticleShowHeaderProps = {
  article: ArticleData;
};

const ArticleShowHeader: React.FC<ArticleShowHeaderProps> = ({ article }) => {
  return (
    <header
      className={clsx(
        'article-header',
        'flex flex-col gap-10 bg-zinc-700 py-7'
      )}>
      <h2 className={clsx('text-4xl font-bold text-gray-200 w-4/6 m-auto')}>
        {article.title}
      </h2>
      <div className='flex flex-row items-center gap-10 w-4/6 m-auto'>
        <Author authorData={article.author} createdAt={article.createdAt} />
        <ButtonGroup>
          <Button>
            <AddIcon /> Follow {article.author.username}
          </Button>
          <Button>
            {article.favourtied ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            Like Article {`(${article.favoritesCount})`}
          </Button>
        </ButtonGroup>
      </div>
    </header>
  );
};

export default ArticleShowHeader;
