import { usePagination } from "pagination-react-js";
import "../../css/Pagination.css";
import PropTypes from "prop-types";
import { useEffect } from "react";

const PaginationItem = ({ children, label, active, onClick, rel }) => {
  return (
    <li
      className={[
        "pagination-item",
        active ? "pagination-item-active" : undefined,
      ]
        .filter((value) => value)
        .join(" ")}
      aria-current={active ?? "page"}
      aria-label={label}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

const Pagination = ({
  data,
  Element,
  currentPage,
  setCurrentPage,
  perPageItems,
  className,
}) => {
  const { records, pageNumbers, setActivePage } = usePagination({
    activePage: currentPage ? currentPage : 1,
    recordsPerPage: !perPageItems ? 9 : perPageItems,
    totalRecordsLength: data?.length,
    offset: 2,
    navCustomPageSteps: { prev: 3, next: 3 },
    permanentFirstNumber: true,
    permanentLastNumber: true,
  });

  useEffect(() => {
    if (currentPage) {
      setActivePage(currentPage);
    }
  }, [currentPage, setActivePage]);

  function updateActivePage(pageNumber) {
    if (pageNumber) {
      setActivePage(pageNumber);
    }
    if (currentPage && setCurrentPage) {
      setCurrentPage(pageNumber);
    }
  }

  return (
    <>
      {/* All items print */}
      <div className={`${className}`}>
        {data
          ?.slice(records.indexOfFirst, records.indexOfLast + 1)
          ?.map((record) => (
            <Element key={record?._id} dataItems={record} />
          ))}
      </div>
      {/* Pagination button here */}

      <nav
        role="navigation"
        aria-label="Pagination Navigation"
        className="absolute right-0 -bottom-14 "
      >
        <ul className="pagination border-2 rounded-full border-dark_trans_purple">
          <PaginationItem
            label={`Goto first page ${pageNumbers.firstPage}`}
            rel="first"
            onClick={() => updateActivePage(pageNumbers.firstPage)}
          >
            &laquo;
          </PaginationItem>

          <PaginationItem
            label={`Goto previous page ${pageNumbers.previousPage}`}
            rel="prev"
            onClick={() => updateActivePage(pageNumbers.previousPage)}
          >
            &lsaquo;
          </PaginationItem>

          <PaginationItem
            label={`Goto first page ${pageNumbers.firstPage}`}
            active={pageNumbers.firstPage === pageNumbers.activePage}
            onClick={() => updateActivePage(pageNumbers.firstPage)}
          >
            {pageNumbers.firstPage}
          </PaginationItem>

          {pageNumbers.customPreviousPage && (
            <PaginationItem
              label={`Goto page ${pageNumbers.customPreviousPage}`}
              onClick={() => updateActivePage(pageNumbers.customPreviousPage)}
            >
              &middot;&middot;&middot;
            </PaginationItem>
          )}

          {pageNumbers.navigation.map((navigationNumber) => {
            const isFirstOrLastPage =
              navigationNumber === pageNumbers.firstPage ||
              navigationNumber === pageNumbers.lastPage;

            return isFirstOrLastPage ? null : (
              <PaginationItem
                label={`Goto page ${navigationNumber}`}
                key={navigationNumber}
                active={navigationNumber === pageNumbers.activePage}
                onClick={() => updateActivePage(navigationNumber)}
              >
                {navigationNumber}
              </PaginationItem>
            );
          })}

          {pageNumbers.customNextPage && (
            <PaginationItem
              label={`Goto page ${pageNumbers.customNextPage}`}
              onClick={() => updateActivePage(pageNumbers.customNextPage)}
            >
              &middot;&middot;&middot;
            </PaginationItem>
          )}

          {pageNumbers.firstPage !== pageNumbers.lastPage && (
            <PaginationItem
              label={`Goto last page ${pageNumbers.lastPage}`}
              active={pageNumbers.lastPage === pageNumbers.activePage}
              onClick={() => updateActivePage(pageNumbers.lastPage)}
            >
              {pageNumbers.lastPage}
            </PaginationItem>
          )}

          <PaginationItem
            label={`Goto next page ${pageNumbers.nextPage}`}
            rel="next"
            onClick={() => {
              if (pageNumbers.nextPage) updateActivePage(pageNumbers.nextPage);
            }}
          >
            &rsaquo;
          </PaginationItem>

          <PaginationItem
            label={`Goto last page ${pageNumbers.lastPage}`}
            rel="last"
            onClick={() => updateActivePage(pageNumbers.lastPage)}
          >
            &raquo;
          </PaginationItem>
        </ul>
      </nav>
    </>
  );
};

PaginationItem.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  rel: PropTypes.string,
};

Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  Element: PropTypes.elementType,
  className: PropTypes.string,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  perPageItems: PropTypes.number,
};

Pagination.defaultProps = {
  data: [],
  className: "",
};

export default Pagination;
