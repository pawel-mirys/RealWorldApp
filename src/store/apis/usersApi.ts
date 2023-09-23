import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Author } from '../../types';

const URL = 'https://api.realworld.io/api';

type FetchedAuthorData = {
  profile: Author;
};

const usersApi = createApi({
  reducerPath: 'user',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints(builder) {
    return {
      fetchUser: builder.query<FetchedAuthorData, string>({
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

export const { useFetchUserQuery } = usersApi;
export { usersApi };
