import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { selectFavoriteCharacters } from '../store/selectors/favoriteCharacters';
import { addFavorite, removeFavorite } from '../store/slices/favoriteCharacters';

const useFavoriteCharacters = () => {
  const dispatch = useAppDispatch();
  const favoriteCharacters = useSelector(selectFavoriteCharacters);

  const addFavoriteCharacter = useCallback(
    (characterId: number) => {
      dispatch(addFavorite(characterId));
    },
    [dispatch],
  );

  const removeFavoriteCharacter = useCallback(
    (characterId: number) => {
      dispatch(removeFavorite(characterId));
    },
    [dispatch],
  );

  const characterIsInFavoriteCharacters = useCallback(
    (characterId: number) => favoriteCharacters.includes(characterId),
    [favoriteCharacters],
  );

  return [
    favoriteCharacters,
    {
      addFavoriteCharacter,
      removeFavoriteCharacter,
      characterIsInFavoriteCharacters,
    },
  ] as const;
};

export default useFavoriteCharacters;
