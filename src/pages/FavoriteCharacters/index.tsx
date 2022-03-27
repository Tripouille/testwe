import React from 'react';
import { Typography, Box } from '@mui/material';
import CharactersGridFromUrlsWithPagination from '../../components/CharactersGridFromUrlsWithPagination';
import useFavoriteCharacterUrls from '../../hooks/useFavoriteCharacterUrls';

const FavoriteCharacters = () => {
  const [favoriteCharacterUrls] = useFavoriteCharacterUrls();
  if (favoriteCharacterUrls.length === 0)
    return (
      <Box display="flex" justifyContent="center">
        <Typography m={4} variant="body1">
          You have no favorite yet, you can add one with the star button on top of a character.
        </Typography>
      </Box>
    );
  return <CharactersGridFromUrlsWithPagination charactersUrls={favoriteCharacterUrls} />;
};

export default FavoriteCharacters;
