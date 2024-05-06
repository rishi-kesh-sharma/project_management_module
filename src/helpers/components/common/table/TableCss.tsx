///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Design One
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Design One Pagination
export const containerClassName =
    // "lg:bottom-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-[3rem] flex justify-center items-center text-dark-800 text-xs",
    "h-[45px] flex justify-center items-center text-dark-800 px-2",
  iconCss = "h-5 w-5 text-sm bg-[#C7C7C7] rounded-lg mx-2",
  pageClassName =
    "w-5 h-5 mx-1 flex justify-center items-center rounded-full hover:bg-primary-medium/70 dark:hover:bg-green-800 hover:text-white/80",
  pageLinkClassName = (paginationCount: number) =>
    paginationCount !== 0 ? "p-1" : "p-2",
  activeClassName = (paginationCount: number) =>
    paginationCount !== 0
      ? "rounded-[3px] bg-[#0E84ED] dark:bg-green-700 text-[#ffffff]"
      : "",
  previousClassName = (hidePrevIcon: boolean) =>
    hidePrevIcon
      ? "text-primary-lighter w-5 h-5 flex justify-center items-center rounded-full text-lg"
      : "",
  previousLinkClassName = (currentPage: number, paginationCount: number) =>
    currentPage !== paginationCount ? "" : "",
  nextClassName = (hideNextIcon: boolean) =>
    hideNextIcon
      ? " text-primary-lighter w-6 h-6 flex justify-center items-center rounded-full text-lg"
      : "",
  nextLinkClassName = (currentPage: number, paginationCount: number) =>
    currentPage !== paginationCount ? "" : "";
