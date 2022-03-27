import { Skeleton } from '@mui/material';
import React, { FC } from 'react';
import CharacterCard from '../CharacterCard';
import { useCharacterQuery } from '../../services/characters';

export interface CharacterCardFromIdProps {
  characterId: number;
}

const CharacterCardFromId: FC<CharacterCardFromIdProps> = ({ characterId }) => {
  const { data: character, isFetching } = useCharacterQuery({ id: characterId });

  if (isFetching) return <Skeleton height={300} width="100%" />;
  if (!character) return null;
  return <CharacterCard character={character} />;
};

export default CharacterCardFromId;
