import React, { FC } from 'react';
import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import CharacterCardFromId from './CharacterCardFromId';

export interface CharacterGridFromIdsProps {
  characterIds: number[];
}

const CharacterGridFromIds: FC<CharacterGridFromIdsProps> = ({ characterIds }) => {
  return (
    <GridContainer>
      {characterIds.map(characterId => (
        <GridItem key={characterId}>
          <CharacterCardFromId characterId={characterId} />
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default CharacterGridFromIds;
