import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import { useFetchArticlesQuery } from '../../store';

const ArticleShow: React.FC = () => {
  const { data } = useFetchArticlesQuery();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const articles = data && data.articles;
  const article = articles?.find((article) => {
    return article.slug === slug;
  });

  return (
    <Container>
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>Author: {article.author.username}</p>
          <p>Created At: {article.createdAt}</p>
        </div>
      )}
      <Button
        onClick={() => {
          navigate('/');
        }}>
        back
      </Button>
    </Container>
  );
};

export default ArticleShow;
