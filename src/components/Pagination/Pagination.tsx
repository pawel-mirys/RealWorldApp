import Pagination from '@mui/material/Pagination';
import { updateCurrentPage, useAppDispatch } from '../../store';
import React, { useEffect } from 'react';

type PaginationBarProps = {
  articlesCount: number;
};

const PaginationBar: React.FC<PaginationBarProps> = ({ articlesCount }) => {
  const dispatch = useAppDispatch();
  const articlesPerPage = 10;
  const totalPages = Math.ceil(articlesCount / articlesPerPage);

  const handleChangePage = (_e: React.ChangeEvent<unknown>, value: number) => {
    const offset = value * 10 - 10;
    dispatch(updateCurrentPage(offset));
  };

  useEffect(() => {
    console.log(articlesCount);
  }, [articlesCount]);

  useEffect(() => {
    dispatch(updateCurrentPage(0));
  }, [dispatch]);

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
