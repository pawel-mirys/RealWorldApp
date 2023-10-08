import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { articlesApi } from './apis/articleApi';
import { profilesApi } from './apis/profilesApi.ts';
import { tagsApi } from './apis/tagsApi.ts';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import popularTagSlice from './slices/tagSlice.ts';
import paginationSlice from './slices/paginationSlice.ts';
import { userApi } from './apis/userApi.ts';
import { authSlice } from './slices/authSlice.ts';

const store = configureStore({
  reducer: {
    popularTagState: popularTagSlice.reducer,
    currentPageState: paginationSlice.reducer,
    tokenState: authSlice.reducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
    [profilesApi.reducerPath]: profilesApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware(),
      articlesApi.middleware,
      profilesApi.middleware,
      tagsApi.middleware,
      userApi.middleware,
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
  useFetchArticlesCountQuery,
  useFetchArticleCommentsQuery,
} from './apis/articleApi.ts';

export { useFetchProfileQuery } from './apis/profilesApi.ts';

export { useFetchPopularTagsQuery } from './apis/tagsApi.ts';

export { useLoginUserMutation } from './apis/userApi.ts';

export const { updateTagState } = popularTagSlice.actions;

export const { updateCurrentPage } = paginationSlice.actions;

export const { setToken } = authSlice.actions;

export { store, useAppDispatch, useAppSelector };
