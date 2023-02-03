import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/authAPI";

export const usersAPI = createApi({
  reducerPath: "users",
  baseQuery,
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
      }),
    }),
  }),
});

export const { useGetUserQuery } = usersAPI;
