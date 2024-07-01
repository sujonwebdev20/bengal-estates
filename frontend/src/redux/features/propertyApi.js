import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: () => "/property/all",
    }),
    getPropertyById: builder.query({
      query: (id) => `/property/${id}`,
    }),
    getAllFavorites: builder.query({
      query: () => `/property/favorites/all`,
    }),
    addToFavoriteById: builder.mutation({
      query: (id) => ({
        url: `/property/favorite/${id}`,
        method: "POST",
      }),
    }),
    createNewProperty: builder.mutation({
      query: (data) => ({
        url: "/admin/property/create",
        method: "POST",
        body: data,
      }),
    }),
    editProperty: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/property/edit/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deletePropertyById: builder.mutation({
      query: (id) => ({
        url: `/admin/property/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPropertiesQuery,
  useGetPropertyByIdQuery,
  useCreateNewPropertyMutation,
  useDeletePropertyByIdMutation,
  useEditPropertyMutation,
  useAddToFavoriteByIdMutation,
  useGetAllFavoritesQuery,
} = propertyApi;
