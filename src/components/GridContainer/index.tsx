import React, { FC } from 'react';
import { Grid } from '@mui/material';

const GridContainer: FC = ({ children }) => {
  return (
    <Grid container alignItems="stretch" p={2} columnSpacing={{ xs: 0, sm: 3 }} rowSpacing={3}>
      {children}
    </Grid>
  );
};

export default GridContainer;
