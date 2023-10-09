import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  token: string | null;
};

const loadTokenFromLocalStorage = (): string | null => {
  return localStorage.getItem('jwtToken') || null;
};

const initialState: AuthState = {
  token: loadTokenFromLocalStorage(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      (state.token = action.payload),
        action.payload && localStorage.setItem('jwtToken', action.payload);
    },
    resetToken: (state) => {
      state.token = null;
      localStorage.removeItem('jwtToken');
    },
  },
});

export const { setToken } = authSlice.actions;
export { authSlice };
