import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const maintenanceRequestApi = createApi({
  reducerPath: "maintenanceRequestApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    maintenanceRequest: builder.mutation({
      query: (data) => ({
        url: "/maintenance-requests",
        method: "POST",
        body: data,
      }),
    }),
    getMaintenanceRequestMessagesAll: builder.query({
      query: () => "/admin/maintenance-requests",
    }),
    getMaintenanceRequestMessagesOfUser: builder.query({
      query: () => "/maintenance-requests",
    }),
    actionTypeChangeById: builder.mutation({
      query: (id) => ({
        url: `/admin/action-change/${id}`,
        method: "PUT",
      }),
    }),
    conversationOfRequest: builder.mutation({
      query: ({ conversationId, data }) => ({
        url: `/maintenance-requests/message?conversationId=${conversationId}`,
        method: "POST",
        body: data,
      }),
    }),
    getSpecificChat: builder.query({
      query: (id) => `/maintenance-requests/${id}`,
    }),
  }),
});

export const {
  useMaintenanceRequestMutation,
  useGetMaintenanceRequestMessagesAllQuery,
  useActionTypeChangeByIdMutation,
  useGetMaintenanceRequestMessagesOfUserQuery,
  useConversationOfRequestMutation,
  useGetSpecificChatQuery,
} = maintenanceRequestApi;
