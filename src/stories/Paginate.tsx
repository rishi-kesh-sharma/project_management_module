import {
  nextClassName,
  nextLinkClassName,
  pageLinkClassName,
  previousClassName,
  previousLinkClassName,
} from "../helpers/components/common/table/TableCss";
import { CommonPaginationSchema } from "../helpers/components/common/table/TableSchema";
import ReactPaginate from "react-paginate";

const Paginate = (props: CommonPaginationSchema) => {
  // Props
  const { currentPage, paginationCount, handlePageClick } = props;

  // Variables
  const hidePrevIcon = currentPage > 1 && currentPage !== 0;
  const hideNextIcon = currentPage <= paginationCount - 1 && currentPage !== 0;

  return (
    <div className="h-[45px] flex justify-center items-center text-dark-800 px-2">
      <ReactPaginate
        // key={paginateKey}
        forcePage={currentPage > 1 ? currentPage - 1 : 0}
        pageCount={paginationCount <= 1 ? 1 : paginationCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
        pageClassName={
          "w-5 h-5 mx-1 flex justify-center items-center rounded-full hover:bg-primary-medium/70 dark:hover:bg-green-800 hover:text-white/80"
        }
        containerClassName={
          "h-[45px] flex justify-center items-center text-dark-800 px-2"
        }
        activeClassName={
          paginationCount !== 0
            ? "rounded-[3px] bg-[#0E84ED] dark:bg-green-700 text-[#ffffff]"
            : ""
        }
        previousLabel="" // Remove previous label
        nextLabel="" // Remove next label
        pageLinkClassName={pageLinkClassName(paginationCount)}
        previousClassName={previousClassName(hidePrevIcon)}
        previousLinkClassName={previousLinkClassName(
          currentPage,
          paginationCount
        )}
        nextClassName={nextClassName(hideNextIcon)}
        nextLinkClassName={nextLinkClassName(currentPage, paginationCount)}
      />
    </div>
  );
};

export default Paginate;
