import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiEndpoint, API_URL } from '../constants';
import { CharacterQueryArgs, CharacterQueryResponse } from './types';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['characters'],
  endpoints: builder => ({
    character: builder.query<CharacterQueryResponse, CharacterQueryArgs>({
      query: params => ({
        url: `${ApiEndpoint.CHARACTERS}/${params.id}`,
      }),
    }),
  }),
});

export const { useCharacterQuery } = charactersApi;
