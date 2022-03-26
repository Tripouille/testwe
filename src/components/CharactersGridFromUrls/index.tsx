import React, { FC } from 'react';
import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import CharacterCardFromUrl from './CharacterCardFromUrl';

export interface CharacterGridFromUrlsProps {
  charactersUrls: string[];
}

const CharacterGridFromUrls: FC<CharacterGridFromUrlsProps> = ({ charactersUrls }) => {
  return (
    <GridContainer>
      {charactersUrls.map(characterUrl => (
        <GridItem key={characterUrl}>
          <CharacterCardFromUrl characterUrl={characterUrl} />
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default CharacterGridFromUrls;
