import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { articlesApi } from './apis/articleApi';
import { usersApi } from './apis/usersApi.ts';
import { tagsApi } from './apis/tagsApi.ts';

const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware(),
      articlesApi.middleware,
      usersApi.middleware,
      tagsApi.middleware,
    ];
  },
});

setupListeners(store.dispatch);

export {
  useFetchArticlesQuery,
  useFetchProfileArticlesQuery,
} from './apis/articleApi.ts';
export { useFetchUserQuery } from './apis/usersApi.ts';
export { useFetchPopularTagsQuery } from './apis/tagsApi.ts';
export { store };
