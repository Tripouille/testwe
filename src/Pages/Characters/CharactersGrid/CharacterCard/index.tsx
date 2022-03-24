import { Card, CardContent, Divider } from '@mui/material';
import React, { FC } from 'react';
import { Character } from '../../../../services/characters/types';
import { useCardStyles } from '../../../../utils/styles';
import CharacterAliases from './CharacterAliases';
import CharacterInfo from './CharacterInfo';

export interface CharacterCardProps {
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const classes = useCardStyles();
  const { name, gender, culture, aliases } = character;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.card}>
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
