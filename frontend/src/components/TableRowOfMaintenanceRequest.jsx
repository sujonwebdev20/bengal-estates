import { RiDeleteBack2Fill } from "react-icons/ri";
import PropTypes from "prop-types";

const TableRowOfMaintenanceRequest = ({
  requestMassage,
  handleRowClick,
  actionTypeChangeHandler,
}) => {
  return (
    <tr
      onClick={() => handleRowClick(requestMassage)}
      className="grid grid-cols-6 h-[3rem] place-items-center border-b border-light_purple hover:bg-dark_purple cursor-pointer"
    >
      <td className="flex items-center text-center h-full">
        {requestMassage.createdAt.slice(0, 10)}
      </td>
      <td className="flex items-center text-center h-full">
        #{requestMassage.tokenId}
      </td>
      <td className="flex items-center text-center h-full">
        {requestMassage.email}
      </td>
      <td className="flex items-center text-center h-full">
        {requestMassage.address.slice(0, 10)}
      </td>
      <td className="flex items-center text-center h-full">
        {requestMassage.phone}
      </td>
      <td className="flex items-center text-center h-full">
        <small
          onClick={(e) => {
            e.stopPropagation();
            actionTypeChangeHandler(e, requestMassage._id);
          }}
          className={`${requestMassage.actionType === "PENDING" ? "bg-[#EB5144]" : "bg-[#86EFAC]"} text-black font-bold py-2 px-4 rounded-sm leading-3`}
        >
          {requestMassage.actionType}
        </small>
      </td>
    </tr>
  );
};

TableRowOfMaintenanceRequest.propTypes = {
  requestMassage: PropTypes.object.isRequired,
  handleRowClick: PropTypes.func.isRequired,
};

export default TableRowOfMaintenanceRequest;
