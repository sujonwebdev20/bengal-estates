import { useEffect, useState } from "react";
import Container from "../../components/shared/Container";
import { toast } from "react-toastify";
import {
  useDeleteBlogByIdMutation,
  useGetAllBlogsQuery,
} from "../../redux/features/BlogApi";
import TableRowOfBlogs from "../../components/TableRowOfBlogs";

const BlogsController = () => {
  const { data, isLoading, refetch } = useGetAllBlogsQuery();
  const [deleteBlogByIdMutation] = useDeleteBlogByIdMutation();
  const [blogs, setBlogs] = useState([]);

  console.log(blogs.data);

  useEffect(() => {
    if (data) {
      setBlogs(data);
    }
  }, [data]);

  const deleteBlog = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete")) {
        const response = await deleteBlogByIdMutation(id).unwrap();
        refetch();
        setBlogs(blogs?.data?.filter((blog) => blog?._id !== id));
        if (response) {
          toast.success("Blog deleted successfully");
        }
      }
    } catch (error) {
      console.error("Failed to delete property: ", error);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <div className="overflow-auto h-[40rem] w-full bg-dark_trans_purple px-5 py-8 rounded-lg mb-20">
        <table className="w-[68rem]">
          <thead className="border-b-4 border-light_purple">
            <tr className="grid grid-cols-4 place-items-center">
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.data?.length > 0 ? (
              blogs?.data?.map((item) => (
                <TableRowOfBlogs
                  key={item?._id}
                  blogData={item}
                  deleteBlog={deleteBlog}
                />
              ))
            ) : (
              <tr className="">
                <td className="text-center text-4xl col-span-4">
                  Blogs not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default BlogsController;
