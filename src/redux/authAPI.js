import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8800/api",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().state.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const authAPI = createApi({
  reducerPath: "auth",
  baseQuery,
  keepUnusedDataFor: 5,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    registrer: builder.mutation({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        body: payload,
      }),
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
      providesTags: ["Auth"],
    }),
    currentUser: builder.query({
      query: () => "/auth/current",
      providesTags: ["Auth"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
  }),
});

export const {
  useRegistrerMutation,
  useLoginMutation,
  useCurrentUserQuery,
  useLogoutMutation,
} = authAPI;
