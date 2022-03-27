import React, { FC, useMemo, useState } from 'react';
import { Stack } from '@mui/material';
import { CHARACTERS_PER_PAGE } from '../../utils/constants';
import CharacterGridFromIds from '../CharactersGridFromIds';
import Pagination from '../Pagination';

export interface CharactersGridFromIdsWithPaginationProps {
  characterIds: number[];
}

const CharactersGridFromIdsWithPagination: FC<CharactersGridFromIdsWithPaginationProps> = ({
  characterIds,
}) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(characterIds.length / CHARACTERS_PER_PAGE);
  const characterIdsDelta = (page - 1) * CHARACTERS_PER_PAGE;
  const slicedCharactersIds = useMemo(
    () => characterIds.slice(characterIdsDelta, characterIdsDelta + CHARACTERS_PER_PAGE),
    [characterIds, characterIdsDelta],
  );

  return (
    <Stack alignItems="center" width="100%">
      <CharacterGridFromIds characterIds={slicedCharactersIds} />
      <Pagination page={page} count={totalPages} onChange={(_event, newPage) => setPage(newPage)} />
    </Stack>
  );
};

export default CharactersGridFromIdsWithPagination;
