import { useState } from "react";

export default function Pagination() {
  const [pages, setPages] = useState(["1", "2", "3", "...", "8", "9", "10"]);
  const [currentPage, setCurrentPage] = useState("1");

//   const goToPage = (page) => {
//     setCurrentPage(page);
//   };

  const goToPreviousPage = () => {
    const previousPageIndex = pages.indexOf(currentPage) - 1;
    if (previousPageIndex >= 0) {
      setCurrentPage(pages[previousPageIndex]);
    }
  };

  const goToNextPage = () => {
    const nextPageIndex = pages.indexOf(currentPage) + 1;
    if (nextPageIndex < pages.length) {
      setCurrentPage(pages[nextPageIndex]);
    }
  };

//    Update the pages state
   const updatePages = (newPages) => {
    setPages(newPages);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-5 px-4 text-gray-600 md:px-8">
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
        <button
          onClick={goToPreviousPage}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 focus:outline-none"
        >
          Previous
        </button>
        <div>
          Page {currentPage} of {pages.length}
        <p>{updatePages}</p>
        </div>
        <button
          onClick={goToNextPage}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
}