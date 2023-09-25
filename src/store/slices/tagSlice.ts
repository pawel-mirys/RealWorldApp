import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialTagState = {
  tag: string;
};

const popularTagSlice = createSlice({
  name: 'popularTag',
  initialState: <InitialTagState>{
    tag: '',
  },
  reducers: {
    updateTagState: (state, action: PayloadAction<string>) => {
      state.tag = action.payload;
    },
  },
});

export default popularTagSlice;
