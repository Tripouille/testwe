import React, { FC } from 'react';
import { Card, CardContent, Divider } from '@mui/material';
import { Character } from '../../services/characters/types';
import { useCardStyles } from '../../utils/styles';
import CharacterAliases from './CharacterAliases';
import CharacterInfo from './CharacterInfo';
import CharacterFavorite from './CharacterFavorite';

export interface CharacterCardProps {
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const classes = useCardStyles();
  const { name, gender, culture, aliases, url } = character;

  return (
    <Card className={classes.card} data-cy="character-card">
      <CardContent className={classes.card}>
        <CharacterFavorite characterUrl={url} />
        <CharacterAliases aliases={aliases} />
        <Divider />
        <CharacterInfo label="Name" value={name} />
        <Divider />
        <CharacterInfo label="Gender" value={gender} />
        <Divider />
        <CharacterInfo label="Culture" value={culture} />
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
