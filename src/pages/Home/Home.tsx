import ArticlesList from '../../components/ArticlesList/ArticlesList';
import FilteredArticlesList from '../../components/FilteredArticlesList/FilteredArticlesList';
import PopularTags from '../../components/PopularTags/PopularTags';
import { useAppSelector, useFetchArticlesQuery } from '../../store';

const Home = () => {
  const { data, isFetching, error } = useFetchArticlesQuery();
  const tagState = useAppSelector((state) => state.popularTagState);

  let list;

  if (tagState.tag === '') {
    list = <ArticlesList data={data} isFetching={isFetching} error={error} />;
  } else {
    list = <FilteredArticlesList />;
  }

  return (
    <main className='flex flex-row w-5/6 m-auto'>
      {list}
      <PopularTags />
    </main>
  );
};

export default Home;
