import React from 'react';
import CharactersGridFromUrlsWithPagination from '../../components/CharactersGridFromUrlsWithPagination';
import useFavoriteCharacterUrls from '../../hooks/useFavoriteCharacterUrls';

const FavoriteCharacters = () => {
  const [favoriteCharacterUrls] = useFavoriteCharacterUrls();
  return <CharactersGridFromUrlsWithPagination charactersUrls={favoriteCharacterUrls} />;
};

export default FavoriteCharacters;
