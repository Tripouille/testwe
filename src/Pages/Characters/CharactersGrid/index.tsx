import React, { FC } from 'react';
import CharacterCard from './CharacterCard';
import { CharactersQueryResponse } from '../../../services/characters/types';
import GridContainer from '../../../components/GridContainer';
import GridItem from '../../../components/GridItem';

export type CharactersGridProps = Pick<CharactersQueryResponse, 'characters'>;

const CharactersGrid: FC<CharactersGridProps> = ({ characters }) => {
  return (
    <GridContainer>
      {characters.map(character => {
        return (
          <GridItem key={character.url}>
            <CharacterCard character={character} />
          </GridItem>
        );
      })}
    </GridContainer>
  );
};

export default CharactersGrid;
