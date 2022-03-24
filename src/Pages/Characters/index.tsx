import { Pagination, Stack } from '@mui/material';
import React, { useState } from 'react';
import Loader from '../../components/Loader';
import { useCharactersQuery } from '../../services/characters';
import CharactersGrid from './CharactersGrid';

const Characters = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useCharactersQuery({ page, pageSize: 6 });

  return (
    <Stack alignItems="center">
      {data && (
        <>
          <CharactersGrid characters={data.characters} />
          <Pagination
            page={page}
            count={data.totalPages}
            onChange={(_event, newPage) => setPage(newPage)}
            variant="outlined"
            color="primary"
            shape="rounded"
            size="large"
          />
        </>
      )}
      {isFetching && <Loader loading />}
    </Stack>
  );
};

export default Characters;
