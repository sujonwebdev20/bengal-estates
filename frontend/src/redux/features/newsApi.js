import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createNews: builder.mutation({
      query: (data) => ({
        url: "/admin/newsies",
        method: "POST",
        body: data,
      }),
    }),
    getAllNews: builder.query({
      query: () => "/newsies",
    }),
    getNewsById: builder.query({
      query: (id) => `/newsies/${id}`,
    }),
    editNewsById: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/newsies/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteNewsById: builder.mutation({
      query: (id) => ({
        url: `/admin/newsies/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateNewsMutation,
  useGetAllNewsQuery,
  useGetNewsByIdQuery,
  useDeleteNewsByIdMutation,
  useEditNewsByIdMutation,
} = newsApi;
