import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { FetchedPopularTagsData } from '../../types';

const URL = 'https://api.realworld.io/api';

const tagsApi = createApi({
  reducerPath: 'popularTags',
  tagTypes: ['PopularTags'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints(builder) {
    return {
      fetchPopularTags: builder.query<FetchedPopularTagsData, void>({
        query: () => {
          return {
            url: '/tags',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchPopularTagsQuery } = tagsApi;
export { tagsApi };
