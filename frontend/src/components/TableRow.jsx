import PropTypes from "prop-types";

const TableRow = ({ propertyKey, propertyValue }) => {
  return (
    <tr className="w-full flex items-center border-light_purple bg-medium_dark_purple rounded-sm">
      <td className="px-4 py-2 w-full whitespace-nowrap max-lg:whitespace-normal text-white capitalize">
        {propertyKey}:
      </td>
      <td className="px-4 py-2 w-full text-gray-300 whitespace-nowrap max-lg:whitespace-normal capitalize">
        {propertyValue}
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  propertyKey: PropTypes.string,
  propertyValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TableRow;
