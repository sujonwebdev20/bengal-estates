import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sendEmailApi = createApi({
  reducerPath: "sendEmail",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (data) => ({
        url: "/admin/sendmail",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSendEmailMutation } = sendEmailApi;
