import { useState } from "react";
import ReactPaginate from "react-paginate";
import "../../css/Pagination.css";

function PaginatedBtn({
  itemsPerPage,
  pageCount,
  currentItems,
  handlePageClick,
}) {
  return (
    <>
      {/* <Component currentItems={currentItems} /> */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="pagination flex gap-5 px-4 py-2 text-lg rounded-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      />
    </>
  );
}

export default PaginatedBtn;
