import ArticlesList from '../../components/ArticlesList/ArticlesList';
import { useFetchArticlesQuery } from '../../store';

const Home = () => {
  const { data, isFetching, error } = useFetchArticlesQuery();
  return <ArticlesList data={data} isFetching={isFetching} error={error} />;
};

export default Home;
