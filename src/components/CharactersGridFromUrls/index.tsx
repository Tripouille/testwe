import React, { FC } from 'react';
import GridContainer from '../GridContainer';
import GridItem from '../GridItem';
import CharacterCardWrapper from './CharacterCardWrapper';

export interface CharacterGridFromUrlsProps {
  charactersUrls: string[];
}

const CharacterGridFromUrls: FC<CharacterGridFromUrlsProps> = ({ charactersUrls }) => {
  return (
    <GridContainer>
      {charactersUrls.map(characterUrl => (
        <GridItem key={characterUrl}>
          <CharacterCardWrapper characterUrl={characterUrl} />
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default CharacterGridFromUrls;
