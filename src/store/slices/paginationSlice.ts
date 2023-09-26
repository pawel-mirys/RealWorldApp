import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialPaginationState = {
  offset: number;
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: <InitialPaginationState>{
    offset: 0,
  },
  reducers: {
    updateCurrentPage: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
  },
});

export default paginationSlice;
