import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

export interface CharacterAliasesProps {
  aliases: string[];
}

const CharacterAliases: FC<CharacterAliasesProps> = ({ aliases }) => {
  const availableAliases = aliases[0].length > 0;

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
      <Typography variant="h6" padding={2}>
        {availableAliases ? (
          aliases.map(alias => (
            <Typography key={alias} variant="h6" textAlign="center">
              {alias}
            </Typography>
          ))
        ) : (
          <Typography variant="h6" textAlign="center">
            Unknown
          </Typography>
        )}
      </Typography>
    </Box>
  );
};

export default CharacterAliases;
