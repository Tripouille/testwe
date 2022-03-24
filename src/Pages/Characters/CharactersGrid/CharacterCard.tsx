import { Card, CardContent, Divider, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { FC } from 'react';
import { Character } from '../../../services/characters/types';

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
  const availableAlias = aliases[0].length > 0;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.card}>
        <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
          <Typography variant="subtitle1" padding={2}>
            {availableAlias ? (
              aliases.map(alias => (
                <Typography key={alias} variant="subtitle1" textAlign="center">
                  {alias}
                </Typography>
              ))
            ) : (
              <Typography variant="subtitle1" textAlign="center">
                Unknown
              </Typography>
            )}
          </Typography>
        </Box>
        <Divider />
        <Typography variant="subtitle1" color="text.primary" textAlign="center" padding={2}>
          Name: {name || 'Unknown'}
        </Typography>
        <Divider />
        <Typography variant="subtitle1" color="text.primary" textAlign="center" padding={2}>
          Gender: {gender || 'Unknown'}
        </Typography>
        <Divider />
        <Typography variant="subtitle1" color="text.primary" textAlign="center" padding={2}>
          Culture: {culture || 'Unknown'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
