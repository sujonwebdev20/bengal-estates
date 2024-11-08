import React, { Children } from "react";

const TableCell = ({ children }) => {
  return <td className="flex items-center text-center h-full">{children}</td>;
};

export default TableCell;
