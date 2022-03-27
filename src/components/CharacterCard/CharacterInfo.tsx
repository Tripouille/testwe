import React, { FC } from 'react';
import { Typography } from '@mui/material';

export interface CharacterInfoProps {
  label?: string;
  value: string;
}

const CharacterInfo: FC<CharacterInfoProps> = ({ label, value }) => {
  return (
    <Typography variant="body2" color="text.primary" textAlign="center" padding={2}>
      {`${label ? `${label}: ` : ''}${value.length ? value : 'Unknown'}`}
    </Typography>
  );
};

export default CharacterInfo;
