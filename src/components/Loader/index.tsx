import { Backdrop, CircularProgress } from '@mui/material';
import React, { FC } from 'react';

export interface LoaderProps {
  loading: boolean;
}

const Loader: FC<LoaderProps> = ({ loading }) => {
  return (
    <Backdrop sx={{ zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
