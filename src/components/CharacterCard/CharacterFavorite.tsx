import { Button } from '@mui/material';
import React, { FC } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import useFavoriteCharacterUrls from '../../hooks/useFavoriteCharacterUrls';

export interface CharacterFavoriteProps {
  characterUrl: string;
}

const CharacterFavorite: FC<CharacterFavoriteProps> = ({ characterUrl }) => {
  const [
    ,
    { urlIsInFavoriteCharacterUrls, addFavoriteCharacterUrls, removeFavoriteCharacterUrls },
  ] = useFavoriteCharacterUrls();
  return urlIsInFavoriteCharacterUrls(characterUrl) ? (
    <Button
      onClick={() => removeFavoriteCharacterUrls(characterUrl)}
      data-cy="remove-favorite-character"
    >
      <StarIcon />
    </Button>
  ) : (
    <Button onClick={() => addFavoriteCharacterUrls(characterUrl)} data-cy="add-favorite-character">
      <StarBorderIcon />
    </Button>
  );
};

export default CharacterFavorite;
