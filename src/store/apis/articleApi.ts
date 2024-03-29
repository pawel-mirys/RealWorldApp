import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ArticleData, DataToPublish, FetchedArticlesData } from '../../types';

const URL = 'https://api.realworld.io/api';

const articlesApi = createApi({
  reducerPath: 'articles',
  tagTypes: ['Article', 'ArticleLikesCount'],
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

      fetchArticlesByTag: builder.query<
        FetchedArticlesData,
        { tag: string; offset: number; token?: string }
      >({
        query: ({ tag, offset, token }) => {
          return {
            url: `/articles?limit=10&offset=${offset}&tag=${tag}`,
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
          };
        },
      }),

      fetchProfileArticles: builder.query<
        FetchedArticlesData,
        { author: string; offset: number; token?: string }
      >({
        providesTags: [{ type: 'Article' }],
        query: ({ author, offset, token }) => {
          return {
            url: `/articles?author=${author}&limit=5&offset=${offset}`,
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

      publishArticle: builder.mutation<
        ArticleData,
        { dataToPublish: DataToPublish; token: string }
      >({
        invalidatesTags: () => {
          return [{ type: 'Article' }];
        },
        query: ({ dataToPublish, token }) => {
          return {
            url: `/articles`,
            method: 'POST',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
            body: {
              article: dataToPublish,
            },
          };
        },
      }),

      updateArticle: builder.mutation<
        ArticleData,
        { dataToPublish: DataToPublish; token: string; slug: string }
      >({
        invalidatesTags: () => {
          return [{ type: 'Article' }];
        },
        query: ({ dataToPublish, token, slug }) => {
          return {
            url: `/articles/${slug}`,
            method: 'PUT',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
            body: {
              article: dataToPublish,
            },
          };
        },
      }),

      deleteArticle: builder.mutation<
        ArticleData,
        { slug: string; token: string }
      >({
        invalidatesTags: () => {
          return [{ type: 'Article' }];
        },
        query: ({ slug, token }) => {
          return {
            url: `/articles/${slug}`,
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
  useDeleteArticleMutation,
  useUpdateArticleMutation,
  usePublishArticleMutation,
} = articlesApi;
export { articlesApi };
