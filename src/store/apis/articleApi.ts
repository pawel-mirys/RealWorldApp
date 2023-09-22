import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Article } from '../../types';

const URL = 'https://api.realworld.io/api';

type FetchedData = {
  articles: Article[];
  articlesCount: number;
};

const articlesApi = createApi({
  reducerPath: 'articles',
  tagTypes: ['Article'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints(builder) {
    return {
      fetchArticles: builder.query<FetchedData, void>({
        query: () => {
          return {
            url: '/articles',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchArticlesQuery } = articlesApi;
export { articlesApi };
