import ArticlesList from '../../components/ArticlesList/ArticlesList';
import PopularTags from '../../components/PopularTags/PopularTags';
import { useFetchArticlesQuery } from '../../store';

const Home = () => {
  const { data, isFetching, error } = useFetchArticlesQuery();
  return (
    <main className='flex flex-row w-5/6 m-auto'>
      <ArticlesList data={data} isFetching={isFetching} error={error} />
      <PopularTags />
    </main>
  );
};

export default Home;
