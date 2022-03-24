import { Card, CardContent, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { FC } from 'react';
import { Character } from '../../../../services/characters/types';
import CharacterAliases from './CharacterAliases';
import CharacterInfo from './CharacterInfo';

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

export interface CharacterCardProps {
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const classes = useStyles();
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
