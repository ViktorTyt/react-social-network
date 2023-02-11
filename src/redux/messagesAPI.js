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
  }),
});

export const { useGetMessagesQuery } = messagesAPI;
