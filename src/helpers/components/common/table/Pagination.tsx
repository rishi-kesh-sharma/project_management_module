import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {
  iconCss,
  containerClassName,
  pageClassName,
  activeClassName,
  pageLinkClassName,
  previousClassName,
  previousLinkClassName,
  nextClassName,
  nextLinkClassName,
} from "./TableCss.tsx";
import { CommonPaginationSchema } from "./TableSchema.tsx";
import ReactPaginate from "react-paginate";

export default function Pagination(props: CommonPaginationSchema) {
  // Props
  const { isLoading, currentPage, paginationCount, handlePageClick } = props;

  // Variables
  const hidePrevIcon = currentPage > 1 && currentPage !== 0;
  const hideNextIcon = currentPage <= paginationCount - 1 && currentPage !== 0;

  // Icons
  const prevLabel = !hidePrevIcon && <BiChevronLeft className={iconCss} />;
  const nextLabel = !hideNextIcon && <BiChevronRight className={iconCss} />;

  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className={containerClassName}>
          <ReactPaginate
            // key={paginateKey}
            forcePage={currentPage > 1 ? currentPage - 1 : 0}
            pageCount={paginationCount <= 1 ? 1 : paginationCount}
            marginPagesDisplayed={1}
            previousLabel="" // Remove previous label
            nextLabel=""
            pageRangeDisplayed={4}
            onPageChange={handlePageClick}
            renderOnZeroPageCount={null}
            pageClassName={pageClassName}
            containerClassName={containerClassName}
            activeClassName={activeClassName(paginationCount)}
            pageLinkClassName={pageLinkClassName(paginationCount)}
          />
        </div>
      )}
    </>
  );
}
