import { Link, NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useGetAllPropertiesQuery } from "../redux/features/propertyApi";

const PropertyPagination = ({ showPerPage, pageHandler }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get("page")) || 1;
  const [counter, setCounter] = useState(currentPage);

  const { data } = useGetAllPropertiesQuery();
  const pageLength = Math.ceil(data?.length / showPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
    const value = showPerPage * counter;
    pageHandler(value - showPerPage, value, counter);
  }, [counter]);

  const paginationTypeHandler = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (pageLength === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  if (!Array.isArray(data) || !data.length) {
    return null;
  }

  return (
    <div className="mb-20">
      <Link
        to="#"
        onClick={() => paginationTypeHandler("prev")}
        className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-lg text-gray-400 hover:bg-light_purple hover:text-black focus:z-20 focus:outline-offset-0`}
      >
        PREV
      </Link>

      {new Array(pageLength).fill(null).map((item, index) => (
        <NavLink
          key={index}
          onClick={() => setCounter(index + 1)}
          to={`?page=${index + 1}`}
          aria-current="page"
          className={`relative z-10 inline-flex items-center ${
            index + 1 === counter ? "bg-light_purple" : ""
          } hover:bg-light_purple px-4 py-2 text-lg rounded-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          {index + 1}
        </NavLink>
      ))}

      <Link
        to="#"
        onClick={() => paginationTypeHandler("next")}
        className={`${
          pageLength === counter ? "hidden" : "block"
        } relative inline-flex items-center rounded-r-md px-2 py-2 text-lg text-gray-400 hover:bg-light_purple hover:text-black focus:z-20 focus:outline-offset-0`}
      >
        NEXT
      </Link>
    </div>
  );
};

PropertyPagination.propTypes = {
  showPerPage: PropTypes.number,
  pageHandler: PropTypes.func,
};

export default PropertyPagination;
