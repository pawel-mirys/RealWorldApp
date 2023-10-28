import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ArticleData, FetchedArticlesData } from '../../types';

const URL = 'https://api.realworld.io/api';

const articlesApi = createApi({
  reducerPath: 'articles',
  tagTypes: ['Article', 'Profile'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints(builder) {
    return {
      fetchArticles: builder.query<FetchedArticlesData, number>({
        query: (offset: number) => {
          return {
            url: `/articles?limit=10&offset=${offset}`,
            method: 'GET',
          };
        },
      }),

      fetchArticlesBySlug: builder.query<
        { article: ArticleData },
        { slug: string; token: string }
      >({
        providesTags: [{ type: 'Profile' }],
        query: ({ slug, token }) => {
          return {
            url: `/articles/${slug}`,
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
          };
        },
      }),
      fetchArticlesByTag: builder.query<FetchedArticlesData, string>({
        query: (tag: string) => {
          return {
            url: `/articles?tag=${tag}`,
            method: 'GET',
          };
        },
      }),

      fetchProfileArticles: builder.query<
        FetchedArticlesData,
        { author: string; token?: string }
      >({
        query: ({ author, token }) => {
          return {
            url: `/articles?author=${author}`,
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
          };
        },
      }),
      fetchArticlesCount: builder.query<FetchedArticlesData, void>({
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

export const {
  useFetchArticlesQuery,
  useFetchProfileArticlesQuery,
  useFetchArticlesByTagQuery,
  useFetchArticlesBySlugQuery,
  useFetchArticlesCountQuery,
} = articlesApi;
export { articlesApi };
