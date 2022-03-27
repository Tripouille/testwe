import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

export interface CharacterAliasesProps {
  aliases: string[];
}

const CharacterAliases: FC<CharacterAliasesProps> = ({ aliases }) => {
  const availableAliases = aliases[0].length > 0;

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
      {availableAliases ? (
        aliases.map(alias => (
          <Typography key={alias} textAlign="center" fontWeight="medium" paragraph m={1}>
            {alias}
          </Typography>
        ))
      ) : (
        <Typography textAlign="center" fontWeight="medium" paragraph m={1}>
          Unknown
        </Typography>
      )}
    </Box>
  );
};

export default CharacterAliases;
