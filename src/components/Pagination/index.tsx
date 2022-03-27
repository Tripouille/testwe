import { Pagination as MuiPagination, PaginationProps as MuiPaginationProps } from '@mui/material';
import React, { FC } from 'react';

export type PaginationProps = Pick<MuiPaginationProps, 'page' | 'count' | 'onChange'>;

const Pagination: FC<PaginationProps> = ({ page, count, onChange }) => {
  if (count === 0) return null;
  return (
    <MuiPagination
      page={page}
      count={count}
      onChange={onChange}
      variant="outlined"
      color="primary"
      shape="rounded"
      size="large"
      data-cy="pagination"
    />
  );
};

export default Pagination;
