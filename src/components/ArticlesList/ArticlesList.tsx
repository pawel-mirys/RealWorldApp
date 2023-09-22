import { Container } from '@mui/material';
import { useFetchArticlesQuery } from '../../store';
import { useNavigate } from 'react-router-dom';
import Article from '../Article/Article';
import clsx from 'clsx';

const ArticlesList = () => {
  const { data, isFetching, error } = useFetchArticlesQuery();
  const navigate = useNavigate();

  const handleShowArticle = (slug: string) => {
    navigate(`/article/${slug}`);
  };

  let content;

  if (isFetching) {
    content = <div>Loading articles...</div>;
  } else if (error) {
    content = <div>Error while fetching articles {`${error}`}</div>;
  } else {
    content = data?.articles.map((article) => {
      return (
        <Article
          key={article.slug}
          article={article}
          onClick={() => handleShowArticle(article.slug)}
        />
      );
    });
  }

  return <Container className={clsx('article-list')}>{content}</Container>;
};

export default ArticlesList;
