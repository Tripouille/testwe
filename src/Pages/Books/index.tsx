import { Pagination, Stack } from '@mui/material';
import React, { useState } from 'react';
import Loader from '../../components/Loader';
import { useBooksQuery } from '../../services/books';
import BooksGrid from './BooksGrid';

const Books = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useBooksQuery({ page, pageSize: 6 });

  return (
    <Stack alignItems="center">
      {data && (
        <>
          <BooksGrid books={data.books} />
          <Pagination
            page={page}
            count={data.totalPages}
            onChange={(_event, newPage) => setPage(newPage)}
            variant="outlined"
            color="primary"
            shape="rounded"
            size="large"
          />
        </>
      )}
      {isFetching && <Loader loading />}
    </Stack>
  );
};

export default Books;
