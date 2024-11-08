import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => "/blog/all",
    }),
    getBlogById: builder.query({
      query: (id) => `/blog/${id}`,
    }),
    createNewBlog: builder.mutation({
      query: (data) => ({
        url: "/admin/blog/create",
        method: "POST",
        body: data,
      }),
    }),
    editBlogById: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/blog/edit/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteBlogById: builder.mutation({
      query: (id) => ({
        url: `/admin/blog/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useCreateNewBlogMutation,
  useDeleteBlogByIdMutation,
  useEditBlogByIdMutation,
} = blogApi;
