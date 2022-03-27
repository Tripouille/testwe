import { createSlice } from '@reduxjs/toolkit';

export const FAVORITE_CHARACTERS_LOCAL_STORAGE_KEY = 'favorite-character-ids';
const localStoragefavoriteCharactersStringified = localStorage.getItem(
  FAVORITE_CHARACTERS_LOCAL_STORAGE_KEY,
);

export const initialState: number[] = localStoragefavoriteCharactersStringified
  ? JSON.parse(localStoragefavoriteCharactersStringified)
  : [];

const favoriteCharactersSlice = createSlice({
  name: FAVORITE_CHARACTERS_LOCAL_STORAGE_KEY,
  initialState,
  reducers: {
    addFavorite(state, { payload: newFavorite }: { payload: number }) {
      const newArray = state.concat(newFavorite);
      localStorage.setItem(FAVORITE_CHARACTERS_LOCAL_STORAGE_KEY, JSON.stringify(newArray));
      return newArray;
    },
    removeFavorite(state, { payload: favoriteToRemove }: { payload: number }) {
      const newArray = state.filter(favorite => favorite !== favoriteToRemove);
      localStorage.setItem(FAVORITE_CHARACTERS_LOCAL_STORAGE_KEY, JSON.stringify(newArray));
      return newArray;
    },
  },
});

const { actions, reducer } = favoriteCharactersSlice;
export const { addFavorite, removeFavorite } = actions;
export type favoriteCharactersState = ReturnType<typeof reducer>;
export default reducer;
