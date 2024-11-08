import { RiDeleteBack2Fill } from "react-icons/ri";
import PropTypes from "prop-types";

const TableRowOfContactMessage = ({
  contactMessage,
  deleteContactMessage,
  handleRowClick,
}) => {
  return (
    <tr
      onClick={() => handleRowClick(contactMessage)}
      className="grid grid-cols-4 h-[3rem] place-items-center border-b border-light_purple hover:bg-dark_purple cursor-pointer"
    >
      <td className="flex items-center text-center h-full">
        {contactMessage.createdAt.slice(0, 10)}
      </td>
      <td className="flex items-center text-center h-full">
        {contactMessage.name}
      </td>
      <td className="flex items-center text-center h-full">
        {contactMessage.email}
      </td>
      <td className="flex items-center max-md:w-[3rem] h-full">
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteContactMessage(e, contactMessage._id);
          }}
        >
          <RiDeleteBack2Fill className="text-4xl text-light_purple hover:text-white hover:border p-1 rounded-md" />
        </button>
      </td>
    </tr>
  );
};

TableRowOfContactMessage.propTypes = {
  contactMessage: PropTypes.object.isRequired,
  deleteContactMessage: PropTypes.func.isRequired,
  handleRowClick: PropTypes.func.isRequired,
};

export default TableRowOfContactMessage;
