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
        url: "/maintenance_request",
        method: "POST",
        body: data,
      }),
    }),
    getMaintenanceRequestMessages: builder.query({
      query: () => "/admin/maintenance_request/all",
    }),
    getMaintenanceRequestMessagesOfUser: builder.query({
      query: () => "/maintenance_request/all",
    }),
    actionTypeChangeById: builder.mutation({
      query: (id) => ({
        url: `/admin/action_change/${id}`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useMaintenanceRequestMutation,
  useGetMaintenanceRequestMessagesQuery,
  useActionTypeChangeByIdMutation,
  useGetMaintenanceRequestMessagesOfUserQuery,
} = maintenanceRequestApi;
