import { Button } from '@mui/material';
import React, { FC } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import useFavoriteCharacters from '../../hooks/useFavoriteCharacters';

export interface CharacterFavoriteProps {
  characterId: number;
}

const CharacterFavorite: FC<CharacterFavoriteProps> = ({ characterId }) => {
  const [, { characterIsInFavoriteCharacters, addFavoriteCharacter, removeFavoriteCharacter }] =
    useFavoriteCharacters();
  return characterIsInFavoriteCharacters(characterId) ? (
    <Button
      onClick={() => removeFavoriteCharacter(characterId)}
      data-cy="remove-favorite-character"
    >
      <StarIcon />
    </Button>
  ) : (
    <Button onClick={() => addFavoriteCharacter(characterId)} data-cy="add-favorite-character">
      <StarBorderIcon />
    </Button>
  );
};

export default CharacterFavorite;
