import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/authAPI";

export const postsAPI = createApi({
  reducerPath: "posts",
  baseQuery,
  keepUnusedDataFor: 5,
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    editPost: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `/posts/${id}`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useEditPostMutation,
} = postsAPI;
