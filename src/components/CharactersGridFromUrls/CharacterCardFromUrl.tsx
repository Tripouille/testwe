import { Skeleton } from '@mui/material';
import React, { FC } from 'react';
import CharacterCard from '../CharacterCard';
import { useCharacterQuery } from '../../services/characters';
import { getLastUrlPart } from '../../utils/url';

export interface CharacterCardFromUrlProps {
  characterUrl: string;
}

const CharacterCardFromUrl: FC<CharacterCardFromUrlProps> = ({ characterUrl }) => {
  const characterId = Number(getLastUrlPart(characterUrl));
  const { data: character, isFetching } = useCharacterQuery({ id: characterId });

  if (isFetching) return <Skeleton height={300} width="100%" />;
  if (!character) return null;
  return <CharacterCard character={character} />;
};

export default CharacterCardFromUrl;
