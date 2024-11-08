import { RiDeleteBack2Fill } from "react-icons/ri";
import PropTypes from "prop-types";

const TableRowOfEnquiryMessages = ({
  enquiryMessage,
  deleteEnquiryMessage,
  handleRowClick,
}) => {
  return (
    <tr
      onClick={() => handleRowClick(enquiryMessage)}
      className="grid grid-cols-5 h-[3rem] place-items-center border-b border-light_purple hover:bg-dark_purple cursor-pointer"
    >
      <td className="flex items-center text-center h-full">
        {enquiryMessage.createdAt.slice(0, 10)}
      </td>
      <td className="flex items-center text-center h-full">
        {enquiryMessage.name}
      </td>
      <td className="flex items-center text-center h-full">
        {enquiryMessage.email}
      </td>
      <td className="flex items-center text-center h-full">
        {enquiryMessage.location}
      </td>
      <td className="flex items-center max-md:w-[3rem] h-full">
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteEnquiryMessage(e, enquiryMessage._id);
          }}
        >
          <RiDeleteBack2Fill className="text-4xl text-light_purple hover:text-white hover:border p-1 rounded-md" />
        </button>
      </td>
    </tr>
  );
};

TableRowOfEnquiryMessages.propTypes = {
  enquiryMessage: PropTypes.object.isRequired,
  deleteEnquiryMessage: PropTypes.func.isRequired,
  handleRowClick: PropTypes.func.isRequired,
};

export default TableRowOfEnquiryMessages;
