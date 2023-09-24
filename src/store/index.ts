import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { articlesApi } from './apis/articleApi';
import { usersApi } from './apis/usersApi.ts';

const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware(),
      articlesApi.middleware,
      usersApi.middleware,
    ];
  },
});

setupListeners(store.dispatch);

export {
  useFetchArticlesQuery,
  useFetchProfileArticlesQuery,
} from './apis/articleApi.ts';
export { useFetchUserQuery } from './apis/usersApi.ts';
export { store };
