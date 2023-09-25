import { useAppSelector, useFetchArticlesByTagQuery } from '../../store';
import ArticlesList from '../ArticlesList/ArticlesList';

const FilteredArticlesList = () => {
  const tagState = useAppSelector((state) => state.popularTagState);

  const { data, isFetching, error } = useFetchArticlesByTagQuery(tagState.tag);

  let list;

  if (data && data?.articles.length > 0) {
    list = <ArticlesList data={data} isFetching={isFetching} error={error} />;
  } else {
    list = <div className='mt-5 text-lg'>No Articles To show...</div>;
  }

  return list;
};

export default FilteredArticlesList;
