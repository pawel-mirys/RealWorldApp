import { Container } from '@mui/material';
import { Article as ArticleData } from '../../types';
import clsx from 'clsx';

type ArticleProps = {
  article: ArticleData;
  onClick: () => void;
};

const Article: React.FC<ArticleProps> = ({ article, onClick }) => {
  return (
    <Container className={clsx('article')} onClick={onClick}>
      <h3>{article.title}</h3>
      <div>
        <div>{article.author.username}</div>
        <div>{article.createdAt}</div>
      </div>
      <div>{article.slug}</div>
    </Container>
  );
};

export default Article;
