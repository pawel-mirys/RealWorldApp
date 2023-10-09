import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../types';

const initialStateCurrentUserState: User = {
  email: '',
  username: '',
  token: '',
  bio: '',
  image: '',
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: initialStateCurrentUserState,
  reducers: {
    updateUserData: (state, action: PayloadAction<User>) => {
      Object.assign(state, action.payload);
    },
    resetUserData: (state) => {
      Object.assign(state, initialStateCurrentUserState);
    },
  },
});

export default currentUserSlice;
