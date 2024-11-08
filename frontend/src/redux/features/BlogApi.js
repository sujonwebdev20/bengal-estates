import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => "/blogs",
    }),
    getBlogById: builder.query({
      query: (id) => `/blogs/${id}`,
    }),
    createNewBlog: builder.mutation({
      query: (data) => ({
        url: "/admin/blogs",
        method: "POST",
        body: data,
      }),
    }),
    editBlogById: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/blogs/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteBlogById: builder.mutation({
      query: (id) => ({
        url: `/admin/blogs/${id}`,
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
