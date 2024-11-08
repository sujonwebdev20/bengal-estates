import { FaEdit } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const TableRowOfProperties = ({ propertyData, deleteProperty }) => {
  return (
    <tr className="grid grid-cols-5 h-[9rem] place-items-center border-b border-light_purple hover:bg-dark_purple cursor-pointer">
      <td className="flex items-center overflow-hidden h-full">
        <img
          className="object-cover h-full"
          src={propertyData.thumbnail}
          alt={propertyData.name}
        />
      </td>

      <td className="flex items-center font-bold h-full">
        {propertyData.name}
      </td>
      <td className="flex items-center font-bold h-full">
        {propertyData.propertyId}
      </td>

      <td className="flex items-center text-center h-full">
        {propertyData.location}
      </td>

      <td className="flex items-center max-md:w-[3rem] h-full">
        <Link to={`/admin/property/edit/${propertyData._id}`}>
          <FaEdit className="text-4xl text-light_purple hover:text-white hover:border p-1 rounded-md" />
        </Link>
        <button onClick={(e) => deleteProperty(propertyData._id)}>
          <RiDeleteBack2Fill className="text-4xl text-light_purple hover:text-white hover:border p-1 rounded-md" />
        </button>
      </td>
    </tr>
  );
};

export default TableRowOfProperties;
