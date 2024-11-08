import { FaEdit } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TableRowOfBlogs = ({ blogData, deleteBlog }) => {
  return (
    <tr className="grid grid-cols-4 h-[9rem] place-items-center border-b border-light_purple hover:bg-dark_purple cursor-pointer">
      <td className="flex items-center overflow-hidden h-full">
        <img
          className="object-cover h-full"
          src={blogData.image}
          alt={blogData.title}
        />
      </td>

      <td className="flex items-center font-bold h-full">
        {blogData.title?.length && blogData.title?.length > 20
          ? blogData.title.slice(0, 20) + "..."
          : blogData.title}
      </td>

      <td className="flex items-center text-center h-full">
        {blogData.createdAt.slice(0, 10)}
      </td>

      <td className="flex items-center max-md:w-[3rem] h-full">
        <Link to={`/admin/blog/edit/${blogData._id}`}>
          <FaEdit className="text-4xl text-light_purple hover:text-white hover:border p-1 rounded-md" />
        </Link>
        <button onClick={() => deleteBlog(blogData._id)}>
          <RiDeleteBack2Fill className="text-4xl text-light_purple hover:text-white hover:border p-1 rounded-md" />
        </button>
      </td>
    </tr>
  );
};

TableRowOfBlogs.propTypes = {
  blogData: PropTypes.object,
  deleteBlog: PropTypes.func,
};

export default TableRowOfBlogs;
