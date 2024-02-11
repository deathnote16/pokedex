import { useState } from 'react';

export const usePagination = () => {
  const maxPage = 1200;
  const minPage = 0;
  const [currentPage, setCurrentPage] = useState<number>(0);

  const nextPage = () => {
    if (currentPage < maxPage) setCurrentPage((prev) => prev + 30);
  };

  const prevPage = () => {
    if (currentPage > minPage) setCurrentPage((prev) => prev - 30);
  };

  return {
    currentPage,
    nextPage,
    prevPage
  };
};
