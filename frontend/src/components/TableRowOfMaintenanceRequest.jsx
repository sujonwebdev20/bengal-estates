import { RiDeleteBack2Fill } from "react-icons/ri";
import PropTypes from "prop-types";
import TableCell from "./shared/TableCell";

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
      <TableCell>{requestMassage.createdAt.slice(0, 10)}</TableCell>
      <TableCell>#{requestMassage.tokenId}</TableCell>
      <TableCell>{requestMassage.email}</TableCell>
      <TableCell>{requestMassage.address.slice(0, 10)}</TableCell>
      <TableCell>{requestMassage.phone}</TableCell>
      <TableCell>
        <small
          onClick={(e) => {
            e.stopPropagation();
            actionTypeChangeHandler(e, requestMassage._id);
          }}
          className={`${requestMassage.actionType === "PENDING" ? "bg-[#EB5144]" : "bg-[#86EFAC]"} text-black font-bold py-2 px-4 rounded-sm leading-3`}
        >
          {requestMassage.actionType}
        </small>
      </TableCell>
    </tr>
  );
};

TableRowOfMaintenanceRequest.propTypes = {
  requestMassage: PropTypes.object.isRequired,
  handleRowClick: PropTypes.func.isRequired,
};

export default TableRowOfMaintenanceRequest;
