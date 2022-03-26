import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { selectFavoriteCharacterUrls } from '../store/selectors/favoriteCharacterUrls';
import { addFavorite, removeFavorite } from '../store/slices/favoriteCharacterUrls';

export const FAVORITE_CHARACTERS_LOCAL_STORAGE_KEY = 'favorite-character-urls';

const useFavoriteCharacterUrls = () => {
  const dispatch = useAppDispatch();
  const favoriteCharacterUrls = useSelector(selectFavoriteCharacterUrls);

  const addFavoriteCharacterUrls = useCallback(
    (characterUrl: string) => {
      dispatch(addFavorite(characterUrl));
    },
    [dispatch],
  );

  const removeFavoriteCharacterUrls = useCallback(
    (characterUrl: string) => {
      dispatch(removeFavorite(characterUrl));
    },
    [dispatch],
  );

  const urlIsInFavoriteCharacterUrls = useCallback(
    (characterUrl: string) => favoriteCharacterUrls.includes(characterUrl),
    [favoriteCharacterUrls],
  );

  return [
    favoriteCharacterUrls,
    {
      addFavoriteCharacterUrls,
      removeFavoriteCharacterUrls,
      urlIsInFavoriteCharacterUrls,
    },
  ] as const;
};

export default useFavoriteCharacterUrls;
