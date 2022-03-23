import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

const NotFound: FC = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
      <Typography variant="h1">Page not found :(</Typography>
    </Box>
  );
};

export default NotFound;
