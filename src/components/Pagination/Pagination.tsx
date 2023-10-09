import Pagination from '@mui/material/Pagination';
import {
  updateCurrentPage,
  useAppDispatch,
  useFetchArticlesCountQuery,
} from '../../store';

const PaginationBar = () => {
  const { data } = useFetchArticlesCountQuery();
  const dispatch = useAppDispatch();

  const articlesCount = data?.articlesCount || 0;
  const articlesPerPage = 10;
  const totalPages = Math.ceil(articlesCount / articlesPerPage);

  const handleChangePage = (_e: React.ChangeEvent<unknown>, value: number) => {
    const offset = value * 10 - 10;
    dispatch(updateCurrentPage(offset));
  };

  return (
    <div className='flex items-center my-10 mx-auto w-full'>
      <Pagination
        onChange={handleChangePage}
        sx={{ margin: 'auto' }}
        color='primary'
        count={totalPages}
        shape='rounded'
        boundaryCount={4}
      />
    </div>
  );
};

export default PaginationBar;
