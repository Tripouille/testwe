export interface Book {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: Date;
  characters: string[];
  povCharacters: string[];
}

export interface BooksApiResponse {
  books: Book[];
  totalPages: number;
}

export interface BooksApiQueryArgs {
  page: number;
  pageSize: number;
}
