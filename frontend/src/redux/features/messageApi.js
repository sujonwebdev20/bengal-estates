import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (id) => `/messages/${id}`,
    }),
  }),
});

export const { useGetMessagesQuery } = messageApi;
