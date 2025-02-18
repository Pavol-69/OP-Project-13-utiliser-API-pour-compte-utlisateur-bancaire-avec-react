import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1/user" }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
      transformResponse: (res) => res.body,
    }),
    getUserInfo: builder.query({
      query: (token) => ({
        url: "/profile",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response) => response.body,
    }),
    updateUserInfo: builder.query({
      query: (info) => ({
        url: "/profile",
        method: "PUT",
        headers: {
          Authorization: `Bearer ${info.token}`,
        },
        body: { firstName: info.firstName, lastName: info.lastName },
      }),
      transformResponse: (response) => response.body,
    }),
  }),
});

export const { useApiMutation } = api;
