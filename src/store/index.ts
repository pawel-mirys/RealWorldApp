import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { articlesApi } from './apis/articleApi';
import { usersApi } from './apis/usersApi.ts';
import { tagsApi } from './apis/tagsApi.ts';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import popularTagSlice from './slices/tagSlice.ts';

const store = configureStore({
  reducer: {
    popularTagState: popularTagSlice.reducer,
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

const useAppDispatch: () => typeof store.dispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =
  useSelector;

export {
  useFetchArticlesQuery,
  useFetchProfileArticlesQuery,
  useFetchArticlesByTagQuery,
  useFetchArticlesBySlugQuery,
} from './apis/articleApi.ts';

export { useFetchUserQuery } from './apis/usersApi.ts';

export { useFetchPopularTagsQuery } from './apis/tagsApi.ts';

export const { updateTagState } = popularTagSlice.actions;

export { store, useAppDispatch, useAppSelector };
