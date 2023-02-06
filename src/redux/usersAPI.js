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
    updateUser: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `/users/${id}`,
          method: "PUT",
          body,
        };
      },
    }),
    updateUserCover: builder.mutation({
      query(body) {
        return {
          url: `/users/upload`,
          method: "PATCH",
          body,
        };
      },
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserCoverMutation } = usersAPI;
