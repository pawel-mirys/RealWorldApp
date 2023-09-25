import { useNavigate, useParams  } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useFetchArticlesQuery } from '../../store';
import ArticleShowHeader from './modules/ArticleShowHeader';
import ArticleShowFooter from './modules/ArticleShowFooter';
import clsx from 'clsx';

const ArticleShow: React.FC = () => {
  const { data } = useFetchArticlesQuery();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const articles = data && data.articles;
  const article = articles?.find((article) => {
    return article.slug === slug;
  });

  const tagsList = articles?.map((article) => {
    const tags = article.tagList.map((tag) => {
      return (
        <Button
          key={tag}
          sx={{ color: 'grey', fontSize: '10px' }}
          color='inherit'>
          {tag}
        </Button>
      );
    });
    return tags;
  });

  return (
    <Box>
      {article && (
        <div className={clsx('article-show', 'flex flex-col gap-7 ')}>
          <ArticleShowHeader article={article} />
          <>
            <div className={clsx('content', 'w-4/6 m-auto text-lg')}>
              <p>{article.body}</p>
            </div>
            <div className={clsx('tags', 'w-4/6 m-auto')}>{tagsList}</div>
          </>
          <ArticleShowFooter />
          <Button
            variant='contained'
            size='small'
            onClick={() => {
              navigate(-1);
            }}>
            back
          </Button>
        </div>
      )}
    </Box>
  );
};

export default ArticleShow;
