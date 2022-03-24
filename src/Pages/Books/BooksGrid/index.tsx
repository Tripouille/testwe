import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { BooksQueryResponse } from '../../../services/books/types';
import BookCard from './BookCard';

export type BooksGridProps = Pick<BooksQueryResponse, 'books'>;

const BooksGrid: FC<BooksGridProps> = ({ books }) => {
  return (
    <Grid container alignItems="stretch" p={2} columnSpacing={{ xs: 0, sm: 3 }} rowSpacing={3}>
      {books.map(book => {
        return (
          <Grid item xs={12} sm={6} md={4} key={book.isbn}>
            <BookCard book={book} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BooksGrid;
