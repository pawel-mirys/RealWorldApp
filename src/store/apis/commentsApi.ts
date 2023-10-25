import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateComment, FetchedCommentData } from '../../types';

const URL = 'https://api.realworld.io/api';

const commentsApi = createApi({
  reducerPath: 'comments',
  tagTypes: ['Comments'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints(builder) {
    return {
      fetchArticleComments: builder.query<
        FetchedCommentData,
        { slug: string; token: string }
      >({
        providesTags: [{ type: 'Comments' }],
        query: ({ slug, token }) => {
          return {
            url: `/articles/${slug}/comments`,
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
          };
        },
      }),
      createComment: builder.mutation<
        { comment: Comment },
        { slug: string; commentBody: CreateComment; token: string }
      >({
        invalidatesTags: () => {
          return [{ type: 'Comments' }];
        },
        query: ({ slug, commentBody, token }) => {
          return {
            url: `/articles/${slug}/comments`,
            method: 'POST',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
            body: {
              comment: commentBody,
            },
          };
        },
      }),
    };
  },
});

export const { useFetchArticleCommentsQuery, useCreateCommentMutation } =
  commentsApi;
export { commentsApi };
