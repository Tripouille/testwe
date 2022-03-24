import { Grid } from '@mui/material';
import React, { FC } from 'react';

const GridItem: FC = ({ children }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      {children}
    </Grid>
  );
};

export default GridItem;
