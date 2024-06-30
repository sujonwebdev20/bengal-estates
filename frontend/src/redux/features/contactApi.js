import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    contact: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
    getAllContact: builder.query({
      query: () => "/admin/contact_messages",
    }),
  }),
});

export const { useContactMutation, useGetAllContactQuery } = contactApi;
