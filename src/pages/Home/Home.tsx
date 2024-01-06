import { Button } from '@mui/material';
import ArticlesList from '../../components/ArticlesList/ArticlesList';
import FilteredArticlesList from '../../components/FilteredArticlesList/FilteredArticlesList';
import PopularTags from '../../components/PopularTags/PopularTags';
import {
  updateTagState,
  useAppDispatch,
  useAppSelector,
  useFetchArticlesQuery,
} from '../../store';
import styles from './Home.module.scss';
import clsx from 'clsx';

const Home = () => {
  const articlesOffset = useAppSelector((state) => state.currentPageState);
  const tagState = useAppSelector((state) => state.popularTagState);
  const currentUserData = useAppSelector((state) => state.currentUserState);
  const { data, isFetching, error } = useFetchArticlesQuery({
    offset: articlesOffset.offset,
    token: currentUserData.token,
  });

  const dispatch = useAppDispatch();

  const list =
    tagState.tag === '' ? (
      <ArticlesList data={data} isFetching={isFetching} error={error} />
    ) : (
      <FilteredArticlesList />
    );

  const handleResetTag = () => {
    dispatch(updateTagState(''));
  };

  return (
    <main
      className={clsx(
        styles.mainArticleContainer,
        'lg:w-4/6 gap-10 min-h-screen flex justify-start items-start lg:flex-row m-4 sm:m-10 lg:m-auto',
        'w-full, flex-col-reverse'
      )}>
      <div className={clsx('xl:w-5/6 ')}>
        <div className='flex flex-row items-center border-b border-blue-400 '>
          <Button onClick={handleResetTag}>Global Feed</Button>
          {tagState.tag !== '' && <Button disabled>#{tagState.tag}</Button>}
        </div>
        <div className={clsx('flex justify-start items-start')}>{list}</div>
      </div>
      <PopularTags className='lg:w-2/6 w-full' />
    </main>
  );
};

export default Home;
