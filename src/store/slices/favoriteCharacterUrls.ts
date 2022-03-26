import { createSlice } from '@reduxjs/toolkit';

export const FAVORITE_CHARACTERS_LOCAL_STORAGE_KEY = 'favorite-character-urls';
const localStorageFavoriteCharacterUrlsStringified = localStorage.getItem(
  FAVORITE_CHARACTERS_LOCAL_STORAGE_KEY,
);

export const initialState: string[] = localStorageFavoriteCharacterUrlsStringified
  ? JSON.parse(localStorageFavoriteCharacterUrlsStringified)
  : [];

const favoriteCharacterUrlsSlice = createSlice({
  name: FAVORITE_CHARACTERS_LOCAL_STORAGE_KEY,
  initialState,
  reducers: {
    addFavorite(state, { payload: newFavorite }: { payload: string }) {
      const newArray = state.concat(newFavorite);
      localStorage.setItem(FAVORITE_CHARACTERS_LOCAL_STORAGE_KEY, JSON.stringify(newArray));
      return newArray;
    },
    removeFavorite(state, { payload: favoriteToRemove }: { payload: string }) {
      const newArray = state.filter(favorite => favorite !== favoriteToRemove);
      localStorage.setItem(FAVORITE_CHARACTERS_LOCAL_STORAGE_KEY, JSON.stringify(newArray));
      return newArray;
    },
  },
});

const { actions, reducer } = favoriteCharacterUrlsSlice;
export const { addFavorite, removeFavorite } = actions;
export type FavoriteCharacterUrlsState = ReturnType<typeof reducer>;
export default reducer;
