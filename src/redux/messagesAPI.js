import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/authAPI";

export const messagesAPI = createApi({
  reducerPath: "messages",
  baseQuery,
  keepUnusedDataFor: 5,
  tagTypes: ["Messages"],
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (conversationId) => `/messages/${conversationId}`,
      providesTags: ["Messages"],
    }),
    addMessage: builder.mutation({
      query(data) {
        return { url: `/messages`, method: "POST", body: { ...data } };
      },
      invalidatesTags: ["Messages"],
    }),
  }),
});

export const { useGetMessagesQuery, useAddMessageMutation } = messagesAPI;
