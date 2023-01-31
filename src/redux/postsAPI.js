import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/authAPI";

export const postsAPI = createApi({
  reducerPath: "posts",
  baseQuery,
  keepUnusedDataFor: 5,
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    addContact: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Posts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    editContact: builder.mutation({
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
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = postsAPI;
