import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, UserLogin } from '../../types';

const URL = 'https://api.realworld.io/api';

const userApi = createApi({
  reducerPath: 'user',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints(builder) {
    return {
      loginUser: builder.mutation<{ user: User }, UserLogin>({
        query: (user: UserLogin) => {
          return {
            url: '/users/login',
            method: 'POST',
            body: {
              user: {
                email: user.email,
                password: user.password,
              },
            },
          };
        },
      }),
    };
  },
});

export const { useLoginUserMutation } = userApi;
export { userApi };
