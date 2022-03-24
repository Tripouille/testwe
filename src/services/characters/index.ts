import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiEndpoint, API_URL } from '../constants';
import { extractTotalPagesFromMeta } from '../utils';
import {
  Character,
  CharacterQueryArgs,
  CharacterQueryResponse,
  CharactersQueryArgs,
  CharactersQueryResponse,
} from './types';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['characters'],
  endpoints: builder => ({
    characters: builder.query<CharactersQueryResponse, CharactersQueryArgs>({
      query: params => ({
        url: ApiEndpoint.CHARACTERS,
        params,
      }),
      transformResponse(params: Character[], meta) {
        return { characters: params, totalPages: extractTotalPagesFromMeta(meta) };
      },
    }),
    character: builder.query<CharacterQueryResponse, CharacterQueryArgs>({
      query: params => ({
        url: `${ApiEndpoint.CHARACTERS}/${params.id}`,
      }),
    }),
  }),
});

export const { useCharactersQuery, useCharacterQuery } = charactersApi;
