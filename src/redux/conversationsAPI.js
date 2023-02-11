import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/authAPI";

export const conversationsAPI = createApi({
  reducerPath: "conversations",
  baseQuery,
  keepUnusedDataFor: 5,
  tagTypes: ["Conversations"],
  endpoints: (builder) => ({
    getConversationByUser: builder.query({
      query: (userId) => `/conversations/${userId}`,
      providesTags: ["Conversations"],
    }),
  }),
});

export const { useGetConversationByUserQuery } = conversationsAPI;
