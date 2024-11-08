import Container from "../../components/shared/Container";
import { toast } from "react-toastify";
import {
  useDeleteNewsByIdMutation,
  useGetAllNewsQuery,
} from "../../redux/features/newsApi";
import TableRowOfNews from "../../components/TableRowOfNews";
import { useState } from "react";

const NewsController = () => {
  const { data: newsData } = useGetAllNewsQuery();

  const [deleteBlogByIdMutation] = useDeleteNewsByIdMutation();
  const [newsState, setNewsState] = useState([]);

  const deleteNews = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete")) {
        const response = await deleteBlogByIdMutation(id).unwrap();

        setNewsState(newsState.filter((news) => news._id !== id));
        if (response) {
          toast.success("Blog deleted successfully");
        }
      }
    } catch (error) {
      console.error("Failed to delete property: ", error);
    }
  };

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
            {newsData?.data.length > 0 ? (
              newsData?.data.map((news) => (
                <TableRowOfNews
                  key={news?._id}
                  newsData={news}
                  deleteNews={deleteNews}
                />
              ))
            ) : (
              <tr className="">
                <td className="text-center text-4xl col-span-4">
                  Property not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default NewsController;
