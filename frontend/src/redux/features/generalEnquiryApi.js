import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const generalEnquiry = createApi({
  reducerPath: "generalEnquiry",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    generalEnquiry: builder.mutation({
      query: (data) => ({
        url: "/general-enquiry",
        method: "POST",
        body: data,
      }),
    }),
    getGeneralEnquiry: builder.query({
      query: () => "/admin/enquiry-messages",
    }),
    deleteEnquiryMessageById: builder.mutation({
      query: (id) => ({
        url: `/admin/enquiry-messages/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGeneralEnquiryMutation,
  useGetGeneralEnquiryQuery,
  useDeleteEnquiryMessageByIdMutation,
} = generalEnquiry;
