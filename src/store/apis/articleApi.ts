import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ArticleData, FetchedArticlesData } from '../../types';

const URL = 'https://api.realworld.io/api';

const articlesApi = createApi({
  reducerPath: 'articles',
  tagTypes: ['Article'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints(builder) {
    return {
      fetchArticles: builder.query<
        FetchedArticlesData,
        { offset: number; token?: string }
      >({
        providesTags: [{ type: 'Article' }],
        query: ({ offset, token }) => {
          return {
            url: `/articles?limit=10&offset=${offset}`,
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
          };
        },
      }),
      fetchArticlesBySlug: builder.query<
        { article: ArticleData },
        { slug: string; token: string }
      >({
        providesTags: [{ type: 'Article' }],
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
      likeArticle: builder.mutation<
        ArticleData,
        { slug: string; token: string }
      >({
        invalidatesTags: () => {
          return [{ type: 'Article' }];
        },
        query: ({ slug, token }) => {
          return {
            url: `/articles/${slug}/favorite`,
            method: 'POST',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
          };
        },
      }),
      dislikeArticle: builder.mutation<
        ArticleData,
        { slug: string; token: string }
      >({
        invalidatesTags: () => {
          return [{ type: 'Article' }];
        },
        query: ({ slug, token }) => {
          return {
            url: `/articles/${slug}/favorite`,
            method: 'DELETE',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
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
  useLikeArticleMutation,
  useDislikeArticleMutation,
} = articlesApi;
export { articlesApi };
