import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface PaginationProps {
  onPageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange, currentPage, totalPages }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <button
        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-l-md focus:outline-none"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <BsArrowLeft />
      </button>
      <span className="mx-2 text-gray-700">{currentPage}</span>
      <button
        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-r-md focus:outline-none"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
