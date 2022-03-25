import { Stack } from '@mui/material';
import React, { useState } from 'react';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import { useBooksQuery } from '../../services/books';
import { BOOKS_PER_PAGE } from '../../utils/constants';
import BooksGrid from '../../components/BooksGrid';

const Books = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useBooksQuery({ page, pageSize: BOOKS_PER_PAGE });

  return (
    <Stack alignItems="center">
      {data && (
        <>
          <BooksGrid books={data.books} />
          <Pagination
            page={page}
            count={data.totalPages}
            onChange={(_event, newPage) => setPage(newPage)}
          />
        </>
      )}
      {isFetching && <Loader loading />}
    </Stack>
  );
};

export default Books;
