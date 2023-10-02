import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useFetchArticlesBySlugQuery } from '../../store';
import ArticleShowHeader from './modules/ArticleShowHeader';
import ArticleShowFooter from './modules/ArticleShowFooter';
import clsx from 'clsx';
import TagsList from '../../components/TagsList/TagsList';
import ArticleShowComments from './modules/ArticleShowComments';

const ArticleShow: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, isFetching, error } = useFetchArticlesBySlugQuery(slug!);

  console.log(data);
  const navigate = useNavigate();

  let content;

  if (isFetching) {
    content = <div>Fetching article data...</div>;
  } else if (error) {
    content = <div>Error while fetching data...</div>;
  } else if (data) {
    const article = data?.article;

    content = (
      <Box>
        <div className={clsx('article-show', 'flex flex-col gap-7 ')}>
          <ArticleShowHeader article={article} />
          <>
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
            <ArticleShowFooter />
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
          </>
        </div>
      </Box>
    );
  }

  return content;
};

export default ArticleShow;
