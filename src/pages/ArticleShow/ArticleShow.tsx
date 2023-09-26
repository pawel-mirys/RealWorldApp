import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useFetchArticlesBySlugQuery } from '../../store';
import ArticleShowHeader from './modules/ArticleShowHeader';
import ArticleShowFooter from './modules/ArticleShowFooter';
import clsx from 'clsx';

const ArticleShow: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, isFetching, error } = useFetchArticlesBySlugQuery(slug!);
  const navigate = useNavigate();

  let content;

  if (isFetching) {
    content = <div>Fetching article data...</div>;
  } else if (error) {
    content = <div>Error while fetching data...</div>;
  } else if (data) {
    const article = data?.article;

    const tagsList = article?.tagList.map((tag) => {
      return (
        <Button
          key={tag}
          sx={{
            color: 'grey',
            fontSize: '10px',
            typography: {
              textTransform: 'none',
            },
          }}
          color='inherit'>
          {tag}
        </Button>
      );
    });

    content = (
      <Box>
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
      </Box>
    );
  }

  return content;
};

export default ArticleShow;
