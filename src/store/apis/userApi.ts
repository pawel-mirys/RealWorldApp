import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UpdateUserData, User, UserLogin, UserRegister } from '../../types';

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
      registerUser: builder.mutation<{ userData: User }, UserRegister>({
        query: (user: UserRegister) => {
          return {
            url: '/users',
            method: 'POST',
            body: {
              user: {
                username: user.name,
                email: user.email,
                password: user.password,
              },
            },
          };
        },
      }),
      getCurrentUserData: builder.query<{ user: User }, string | null>({
        query: (token: string) => {
          return {
            url: '/user',
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
          };
        },
      }),
      updateCurrentUserSettings: builder.mutation<
        { user: UpdateUserData },
        { token: string | null; user: UpdateUserData }
      >({
        query: ({ token, user }) => {
          return {
            url: '/user',
            method: 'PUT',
            headers: {
              accept: 'application/json',
              Authorization: `Token ${token}`,
            },
            body: {
              user: {
                email: user.email,
                password: user.password,
                username: user.username,
                bio: user.bio,
                image: user.image,
              },
            },
          };
        },
      }),
    };
  },
});

export const {
  useLoginUserMutation,
  useGetCurrentUserDataQuery,
  useUpdateCurrentUserSettingsMutation,
  useRegisterUserMutation,
} = userApi;
export { userApi };
