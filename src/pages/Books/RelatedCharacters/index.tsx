import React, { FC, useMemo, useState } from 'react';
import { Stack } from '@mui/material';
import CharacterGridFromUrls from '../../../components/CharactersGridFromUrls';
import Pagination from '../../../components/Pagination';
import { CHARACTERS_PER_PAGE } from '../../../utils/constants';

export interface RelatedCharactersProps {
  charactersUrls: string[];
}

const RelatedCharacters: FC<RelatedCharactersProps> = ({ charactersUrls }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(charactersUrls.length / CHARACTERS_PER_PAGE);
  const charactersUrlsDelta = (page - 1) * CHARACTERS_PER_PAGE;
  const slicedCharactersUrls = useMemo(
    () => charactersUrls.slice(charactersUrlsDelta, charactersUrlsDelta + CHARACTERS_PER_PAGE),
    [charactersUrls, charactersUrlsDelta],
  );

  return (
    <Stack alignItems="center">
      <CharacterGridFromUrls charactersUrls={slicedCharactersUrls} />
      <Pagination page={page} count={totalPages} onChange={(_event, newPage) => setPage(newPage)} />
    </Stack>
  );
};

export default RelatedCharacters;
