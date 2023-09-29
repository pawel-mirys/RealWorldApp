import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  ArticleData,
  Author,
  FetchedArticlesData,
  FetchedCommentData,
} from '../../types';

const URL = 'https://api.realworld.io/api';

const articlesApi = createApi({
  reducerPath: 'articles',
  tagTypes: ['Article'],
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
      fetchArticleComments: builder.query<FetchedCommentData, string>({
        query: (slug: string) => {
          return {
            url: `/articles/${slug}/comments`,
            method: 'GET',
          };
        },
      }),

      fetchArticlesBySlug: builder.query<{ article: ArticleData }, string>({
        query: (slug: string) => {
          return {
            url: `/articles/${slug}`,
            method: 'GET',
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
        Author['username']
      >({
        query: (author: Author['username']) => {
          return {
            url: `/articles?author=${author}`,
            method: 'GET',
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
  useFetchArticleCommentsQuery,
} = articlesApi;
export { articlesApi };
