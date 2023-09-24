import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Author, FetchedArticlesData } from '../../types';

const URL = 'https://api.realworld.io/api';

const articlesApi = createApi({
  reducerPath: 'articles',
  tagTypes: ['Article'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints(builder) {
    return {
      fetchArticles: builder.query<FetchedArticlesData, void>({
        query: () => {
          return {
            url: '/articles',
            method: 'GET',
          };
        },
      }),
      fetchProfileArticles: builder.query<
        FetchedArticlesData,
        Author['username']
      >({
        query: (author: Author['username']) => {
          return {
            url: `/articles?author=${author}`,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchArticlesQuery, useFetchProfileArticlesQuery } =
  articlesApi;
export { articlesApi };
