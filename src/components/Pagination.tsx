import React from 'react';
import { Flex, Button, Box, useBreakpointValue } from '@chakra-ui/react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const MAX_VISIBLE_PAGES = 5; 
  const buttonSize = useBreakpointValue({ base: 'xs', md: 'lg' });

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
      onPageChange(newPage);
    }
  };
  
  const pageNumbers = [];
  let startPage, endPage;

  if (totalPages <= MAX_VISIBLE_PAGES) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= Math.ceil(MAX_VISIBLE_PAGES / 2)) {
      startPage = 1;
      endPage = MAX_VISIBLE_PAGES;
    } else if (currentPage + Math.floor(MAX_VISIBLE_PAGES / 2) >= totalPages) {
      startPage = totalPages - MAX_VISIBLE_PAGES + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor(MAX_VISIBLE_PAGES / 2);
      endPage = startPage + MAX_VISIBLE_PAGES - 1;
    }
  }
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <Button
        key={i}
        onClick={() => handlePageChange(i)}
        size={buttonSize}
        fontWeight={i === currentPage ? 'bold' : 'normal'}
        colorScheme={i === currentPage ? 'blue' : 'gray'}
        marginRight="0.5rem"
      >
        {i}
      </Button>
    );
  }

  return (
    <Box style={{ backgroundColor: "#081730" }}>
      <Flex flexDirection="column" alignItems="center" paddingTop="1rem" paddingBottom="4rem">
        <Flex flexDirection="row">
          <Button onClick={() => handlePageChange(1)} disabled={currentPage === 1} size={buttonSize} >
            {'<<'}
          </Button>
          <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} size={buttonSize} marginLeft="0.5rem" marginRight="0.5rem">
            {'<'}
          </Button>
          {pageNumbers}
          <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} size={buttonSize} marginRight="0.5rem">
            {'>'}
          </Button>
          <Button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} size={buttonSize}>
            {'>>'}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Pagination;
