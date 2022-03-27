import React from 'react';
import { Typography, Box } from '@mui/material';
import CharactersGridFromIdsWithPagination from '../../components/CharactersGridFromIdsWithPagination';
import useFavoriteCharacters from '../../hooks/useFavoriteCharacters';

const FavoriteCharacters = () => {
  const [favoriteCharacterIds] = useFavoriteCharacters();

  if (favoriteCharacterIds.length === 0)
    return (
      <Box display="flex" justifyContent="center">
        <Typography m={4} variant="body1">
          You have no favorite yet, you can add one with the star button on top of a character.
        </Typography>
      </Box>
    );
  return <CharactersGridFromIdsWithPagination characterIds={favoriteCharacterIds} />;
};

export default FavoriteCharacters;
