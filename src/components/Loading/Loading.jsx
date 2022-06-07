import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

// eslint-disable-next-line react/prop-types
function Loading({ load }) {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={load}>
      <CircularProgress />
    </Backdrop>
  );
}

export default Loading;
