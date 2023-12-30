import { useEffect } from 'react';
import {
  updateCurrentPage,
  useAppDispatch,
  useAppSelector,
  useFetchArticlesByTagQuery,
} from '../../store';
import ArticlesList from '../ArticlesList/ArticlesList';

const FilteredArticlesList = () => {
  const dispatch = useAppDispatch();
  const currentUserData = useAppSelector((state) => state.currentUserState);
  const page = useAppSelector((state) => state.currentPageState);
  const tagState = useAppSelector((state) => state.popularTagState);

  useEffect(() => {
    dispatch(updateCurrentPage(0));
  }, [dispatch]);

  const { data, isFetching, error } = useFetchArticlesByTagQuery({
    tag: tagState.tag,
    offset: page.offset,
    token: currentUserData.token,
  });

  let list;

  if (data && data?.articles.length > 0) {
    list = <ArticlesList data={data} isFetching={isFetching} error={error} />;
  } else {
    list = <div className='mt-5 text-lg'>No Articles To show...</div>;
  }

  return list;
};

export default FilteredArticlesList;
