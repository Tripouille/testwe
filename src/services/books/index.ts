import { createApi, fetchBaseQuery, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import { ApiEndpoint, API_URL } from '../constants';
import { Book, BooksApiQueryArgs, BooksApiResponse } from './types';

const extracttotalPagesFromMeta = (meta?: FetchBaseQueryMeta): number => {
  const links = meta?.response?.headers.get('link')?.split(',');
  if (!links) return 0;
  const lastLink = links.find((link: string) => link.includes('last'));
  const lastLinkPageRegexResult = lastLink?.match(/page=([0-9]+)/);
  return Number(lastLinkPageRegexResult?.at(1) ?? 0);
};

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['books'],
  endpoints: builder => ({
    books: builder.query<BooksApiResponse, BooksApiQueryArgs>({
      query: params => ({
        url: ApiEndpoint.BOOKS,
        params,
      }),
      transformResponse(params: Book[], meta) {
        return { books: params, totalPages: extracttotalPagesFromMeta(meta) };
      },
    }),
  }),
});

export const { useBooksQuery } = booksApi;
