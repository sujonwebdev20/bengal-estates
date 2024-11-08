import { FaEdit } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TableRowOfNews = ({ newsData, deleteNews }) => {
  return (
    <tr className="grid grid-cols-4 h-[9rem] place-items-center border-b border-light_purple hover:bg-dark_purple cursor-pointer">
      <td className="flex items-center overflow-hidden h-full">
        <img
          className="object-cover h-full"
          src={newsData.image}
          alt={newsData.title}
        />
      </td>

      <td className="flex items-center font-bold h-full">
        {newsData.title?.length && newsData.title?.length > 20
          ? newsData.title.slice(0, 20) + "..."
          : newsData.title}
      </td>

      <td className="flex items-center text-center h-full">
        {newsData.createdAt.slice(0, 10)}
      </td>

      <td className="flex items-center max-md:w-[3rem] h-full">
        <Link to={`/admin/news/edit/${newsData._id}`}>
          <FaEdit className="text-4xl text-light_purple hover:text-white hover:border p-1 rounded-md" />
        </Link>
        <button onClick={() => deleteNews(newsData._id)}>
          <RiDeleteBack2Fill className="text-4xl text-light_purple hover:text-white hover:border p-1 rounded-md" />
        </button>
      </td>
    </tr>
  );
};

TableRowOfNews.propTypes = {
  newsData: PropTypes.object,
  deleteNews: PropTypes.func,
};

export default TableRowOfNews;
