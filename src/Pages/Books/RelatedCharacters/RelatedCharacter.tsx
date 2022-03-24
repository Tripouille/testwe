import { Skeleton } from '@mui/material';
import React, { FC } from 'react';
import { useCharacterQuery } from '../../../services/characters';
import CharacterCard from '../../Characters/CharactersGrid/CharacterCard';

export interface RelatedCharacterProps {
  characterUrl: string;
}

const RelatedCharacter: FC<RelatedCharacterProps> = ({ characterUrl }) => {
  const characterId = Number(characterUrl.split('/').at(-1));
  const { data: character, isFetching } = useCharacterQuery({ id: characterId });

  if (isFetching) return <Skeleton height={300} width="100%" />;
  if (!character) return null;
  return <CharacterCard character={character} />;
};

export default RelatedCharacter;
