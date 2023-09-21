import { useFetchArticlesQuery } from '../../store';

const ArticlesList = () => {
  const { data, isFetching, error } = useFetchArticlesQuery();

  let content;

  if (isFetching) {
    content = <div>Loading articles...</div>;
  } else if (error) {
    content = <div>Error while fetching articles {`${error}`}</div>;
  } else {
    content = data?.articles.map((article) => {
      return <div key={article.slug}>{article.slug}</div>;
    });
  }

  return <div>{content}</div>;
};

export default ArticlesList;
