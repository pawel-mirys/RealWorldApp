import { useAppSelector, useFetchArticlesByTagQuery } from '../../store';
import ArticlesList from '../ArticlesList/ArticlesList';

const FilteredArticlesList = () => {
  const tagState = useAppSelector((state) => state.popularTagState);

  const { data, isFetching, error } = useFetchArticlesByTagQuery(tagState.tag);

  return <ArticlesList data={data} isFetching={isFetching} error={error} />;
};

export default FilteredArticlesList;
