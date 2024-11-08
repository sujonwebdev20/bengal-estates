import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: () => "/properties",
    }),
    getSuggestedProperties: builder.query({
      query: () => "/suggested-properties",
    }),
    getPropertyById: builder.query({
      query: (id) => `/properties/${id}`,
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
        url: "/admin/properties",
        method: "POST",
        body: data,
      }),
    }),
    editProperty: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/properties/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deletePropertyById: builder.mutation({
      query: (id) => ({
        url: `/admin/properties/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPropertiesQuery,
  useGetSuggestedPropertiesQuery,
  useGetPropertyByIdQuery,
  useCreateNewPropertyMutation,
  useDeletePropertyByIdMutation,
  useEditPropertyMutation,
  useAddToFavoriteByIdMutation,
  useGetAllFavoritesQuery,
} = propertyApi;
