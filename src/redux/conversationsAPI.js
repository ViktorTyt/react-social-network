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
    getConversationByTwoUser: builder.query({
      query(data) {
        const { firstUserId, secondUserId } = data;
        console.log(data);
        return { url: `/conversations/find/${firstUserId}/${secondUserId}` };
      },
      providesTags: ["Conversations"],
    }),
    addConversation: builder.mutation({
      query(data) {
        return { url: `/conversations`, method: "POST", body: { ...data } };
      },
      invalidatesTags: ["Conversations"],
    }),
  }),
});

export const {
  useGetConversationByUserQuery,
  useGetConversationByTwoUserQuery,
  useAddConversationMutation,
} = conversationsAPI;
