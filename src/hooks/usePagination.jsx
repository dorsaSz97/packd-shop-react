import { useState } from 'react';

const PRODUCTS_PER_PAGE = 6;

const usePagination = (data, perPage = PRODUCTS_PER_PAGE) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / perPage);
  const startingIndex = (currentPage - 1) * perPage;
  const endingIndex = startingIndex + perPage;
  const displayedData = data.slice(startingIndex, endingIndex);

  // const goNextPage = () => {
  //   setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  // };
  // const goPrevPage = () => {
  //   setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  // };
  const goToPage = page => {
    setCurrentPage(Math.min(page, Math.max(page, 1)));
  };

  return {
    currentPage,
    totalPages,
    displayedData,
    goToPage,
  };
};

export default usePagination;
