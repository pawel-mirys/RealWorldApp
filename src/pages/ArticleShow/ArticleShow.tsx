import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Skeleton } from '@mui/material';
import { useFetchArticlesBySlugQuery } from '../../store';
import ArticleShowHeader from './modules/ArticleShowHeader';
import ArticleShowFooter from './modules/ArticleShowFooter';
import clsx from 'clsx';
import TagsList from '../../components/TagsList/TagsList';
import ArticleShowComments from './modules/ArticleShowComments';

const ArticleShow: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, isFetching, error } = useFetchArticlesBySlugQuery(slug!);
  const navigate = useNavigate();

  if (isFetching) {
    return <Skeleton animation='wave' height={'300px'} />;
  }

  if (error) {
    return <div>Error while fetching data...</div>;
  }

  if (!data) {
    return null;
  }

  const { article } = data;

  return (
    <Box>
      <div className={clsx('article-show', 'flex flex-col gap-7 ')}>
        <ArticleShowHeader article={article} />
        <div className={clsx('content', 'w-4/6 m-auto text-lg')}>
          <p>{article.body}</p>
        </div>
        <div className={clsx('tags', 'w-4/6 m-auto')}>
          <TagsList
            data={article.tagList}
            isLoading={isFetching}
            error={error}
            disabled
          />
        </div>
        <ArticleShowFooter slug={data.article.slug}/>
        <Button
          variant='contained'
          size='small'
          sx={{ position: 'sticky', top: 60 }}
          onClick={() => {
            navigate(-1);
          }}>
          back
        </Button>
        <ArticleShowComments slug={slug || ''} />
      </div>
    </Box>
  );
};

export default ArticleShow;
