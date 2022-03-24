import React, { FC } from 'react';
import { BooksQueryResponse } from '../../../services/books/types';
import BookCard from './BookCard';
import GridItem from '../../../components/GridItem';
import GridContainer from '../../../components/GridContainer';

export type BooksGridProps = Pick<BooksQueryResponse, 'books'>;

const BooksGrid: FC<BooksGridProps> = ({ books }) => {
  return (
    <GridContainer>
      {books.map(book => {
        return (
          <GridItem key={book.isbn}>
            <BookCard book={book} />
          </GridItem>
        );
      })}
    </GridContainer>
  );
};

export default BooksGrid;
