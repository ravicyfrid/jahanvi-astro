import React from "react";
import ReactPaginate from "react-paginate";
import { LeftArrow, RightArrow } from "../assets/svg";

const Pagination: React.FC<any> = ({ pageCount, onPageChange, current_page }) => {
  const handlePageChange = ({ selected }: { selected: number }) => {
    onPageChange({ selected });
  };

  return (
    <ReactPaginate
      previousLabel={<LeftArrow className="me-1" />}   // Bootstrap margin utility
      nextLabel={<RightArrow className="ms-1" />}
      breakLabel="..."
      pageCount={pageCount}
      pageRangeDisplayed={3}
      onPageChange={handlePageChange}
      forcePage={current_page - 1}
      // ✅ Bootstrap pagination classes
      containerClassName="pagination justify-content-center mt-4"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      disabledClassName="disabled"
      breakClassName="page-item disabled"
      breakLinkClassName="page-link"
    />
  );
};

export default Pagination;
