import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/authAPI";

export const postsAPI = createApi({
  reducerPath: "posts",
  baseQuery,
  keepUnusedDataFor: 5,
  tagTypes: ["Posts", "Comments"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (userId) => `/posts/timeline/${userId}`,
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
    editLikes: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `/posts/${id}/like`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["Posts"],
    }),
    getPostComments: builder.query({
      query: (id) => `/posts/${id}/comments`,
      providesTags: ["Comments"],
    }),
    getCommentById: builder.query({
      query: (id) => `/posts/comments/${id}`,
      invalidatesTags: ["Comments"],
    }),
    addComment: builder.mutation({
      query: (data) => ({
        url: "/posts/comments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useEditPostMutation,
  useEditLikesMutation,
  useGetPostCommentsQuery,
  useGetCommentByIdQuery,
  useAddCommentMutation,
} = postsAPI;
