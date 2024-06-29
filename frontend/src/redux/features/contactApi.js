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
    deleteEnquiryMessageById: builder.mutation({
      query: (id) => ({
        url: `/admin/enquiry_messages/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useContactMutation, useGetAllContactQuery } = contactApi;
