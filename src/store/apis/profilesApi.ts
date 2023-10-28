import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { FetchedAuthorData } from '../../types';

const URL = 'https://api.realworld.io/api';

const profilesApi = createApi({
  reducerPath: 'profile',
  tagTypes: ['Profile'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints(builder) {
    return {
      fetchProfile: builder.query<
        FetchedAuthorData,
        { userName: string; token: string }
      >({
        providesTags: [{ type: 'Profile' }],
        query: ({ userName, token }) => {
          return {
            url: `/profiles/${userName}`,
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
          };
        },
      }),
      followProfile: builder.mutation<
        FetchedAuthorData,
        { userName: string; token: string }
      >({
        invalidatesTags: () => {
          return [{ type: 'Profile' }];
        },
        query: ({ userName, token }) => {
          return {
            url: `/profiles/${userName}/follow`,
            method: 'POST',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
          };
        },
      }),
      unfollowProfile: builder.mutation<
        FetchedAuthorData,
        { userName: string; token: string }
      >({
        invalidatesTags: () => {
          return [{ type: 'Profile' }];
        },
        query: ({ userName, token }) => {
          return {
            url: `/profiles/${userName}/follow`,
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
  useFetchProfileQuery,
  useFollowProfileMutation,
  useUnfollowProfileMutation,
} = profilesApi;
export { profilesApi };
