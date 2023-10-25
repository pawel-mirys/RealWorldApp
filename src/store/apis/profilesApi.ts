import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { FetchedAuthorData } from '../../types';

const URL = 'https://api.realworld.io/api';

const profilesApi = createApi({
  reducerPath: 'profile',
  tagTypes: ['Profile'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints(builder) {
    return {
      fetchProfile: builder.query<FetchedAuthorData, string>({
        query: (userName: string) => {
          return {
            url: `/profiles/${userName}`,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchProfileQuery } = profilesApi;
export { profilesApi };
