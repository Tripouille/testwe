import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiEndpoint, API_URL } from '../constants';
import { extractTotalPagesFromMeta } from '../utils';
import { Book, BooksQueryArgs, BooksQueryResponse } from './types';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['books'],
  endpoints: builder => ({
    books: builder.query<BooksQueryResponse, BooksQueryArgs>({
      query: params => ({
        url: ApiEndpoint.BOOKS,
        params,
      }),
      transformResponse(params: Book[], meta) {
        return { books: params, totalPages: extractTotalPagesFromMeta(meta) };
      },
    }),
  }),
});

export const { useBooksQuery } = booksApi;
