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
      providesTags: ["Users"],
    }),
    getFriends: builder.query({
      query: (id) => ({
        url: `/users/friends/${id}`,
      }),
      providesTags: ["Users"],
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
      invalidatesTags: ["Users"],
    }),
    updateUserCover: builder.mutation({
      query(data) {
        return {
          url: `/users/cover`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Users"],
    }),
    updateUserAvatar: builder.mutation({
      query(data) {
        return {
          url: `/users/avatar`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Users"],
    }),
    follow: builder.mutation({
      query({ id, userId }) {
        console.log(id);
        console.log(userId);
        return {
          url: `/users/${id}/follow`,
          method: "PUT",
          body: { userId },
        };
      },
      invalidatesTags: ["Users"],
    }),
    unfollow: builder.mutation({
      query({ id, userId }) {
        console.log(id);
        console.log(userId);
        return {
          url: `/users/${id}/unfollow`,
          method: "PUT",
          body: { userId },
        };
      },
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserCoverMutation,
  useUpdateUserAvatarMutation,
  useGetFriendsQuery,
  useFollowMutation,
  useUnfollowMutation,
} = usersAPI;
