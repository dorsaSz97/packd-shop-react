import { useCallback, useState } from 'react';

const PRODUCTS_PER_PAGE = 6;
const usePagination = (data, perPage = PRODUCTS_PER_PAGE) => {
  const totalPages = Math.ceil(data.length / perPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startingIndex = (currentPage - 1) * perPage;
  const endingIndex = startingIndex + perPage;
  const displayedData = data.slice(startingIndex, endingIndex);

  const goNextPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  };
  const goPrevPage = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };
  const goToPage = page => {
    setCurrentPage(Math.min(page, Math.max(page, 1)));
  };

  return {
    goToPage,
    goNextPage,
    goPrevPage,
    displayedData,
    currentPage,
    totalPages,
  };
};

export default usePagination;
