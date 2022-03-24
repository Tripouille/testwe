import React, { FC } from 'react';
import { Grid } from '@mui/material';
import CharacterCard from './CharacterCard';
import { CharactersQueryResponse } from '../../../services/characters/types';

export type CharactersGridProps = Pick<CharactersQueryResponse, 'characters'>;

const CharactersGrid: FC<CharactersGridProps> = ({ characters }) => {
  return (
    <Grid container alignItems="stretch" p={2} columnSpacing={{ xs: 0, sm: 3 }} rowSpacing={3}>
      {characters.map(character => {
        return (
          <Grid item xs={12} sm={6} md={4} key={character.url}>
            <CharacterCard character={character} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CharactersGrid;
