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
      providesTags: (result) =>
        // result.map(({ _id }) => console.log(_id)),
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ _id }) => ({ type: "Posts", _id })),
              { type: "Posts", id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: "Posts", id: "LIST" }],
    }),
    allPostByUser: builder.query({
      query: (username) => `/posts/profile/${username}`,
      providesTags: (result) =>
        // result.map(({ _id }) => console.log(_id)),
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ _id }) => ({ type: "Posts", _id })),
              { type: "Posts", id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: "Posts", id: "LIST" }],
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }],
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
      invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }],
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
      invalidatesTags: (result, error, { id }) => [{ type: "Posts", id }],
      // invalidatesTags: (result, error, { id }) => console.log(id),
    }),
    getPostComments: builder.query({
      query: (id) => `/posts/${id}/comments`,
      // providesTags: ({ data: { comments } }) => console.log(comments),
      providesTags: ({ data: { comments } }) =>
        // result.map(({ _id }) => console.log(_id)),
        // is result available?
        comments
          ? // successful query
            [
              ...comments.map(({ _id }) => ({ type: "Comments", _id })),
              { type: "Comments", id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: "Comments", id: "LIST" }],
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
      invalidatesTags: (result, error, { id }) => [{ type: "Comments", id }],
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
  useAllPostByUserQuery,
} = postsAPI;
