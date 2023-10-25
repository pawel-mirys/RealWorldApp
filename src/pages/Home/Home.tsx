import React from 'react';
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
import PaginationBar from '../../components/Pagination/Pagination';

const Home = () => {
  const page = useAppSelector((state) => state.currentPageState);
  const { data, isFetching, error } = useFetchArticlesQuery(page.offset);
  const tagState = useAppSelector((state) => state.popularTagState);
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
    <main className={clsx(styles.mainArticleContainer, 'w-4/6 gap-10')}>
      <div className={clsx(styles.aricleListContainer)}>
        <div className='flex flex-row items-center border-b border-blue-400 '>
          <Button onClick={handleResetTag}>Global Feed</Button>
          {tagState.tag !== '' && <Button disabled>#{tagState.tag}</Button>}
        </div>
        <div className={clsx(styles.list)}>{list}</div>
        <PaginationBar />
      </div>
      <PopularTags className='w-2/6' />
    </main>
  );
};

export default Home;
