/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function Skeleton({ text }) {
  return (
    <Box style={{
      height: '64vh', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
    }}
    >
      <StarOutlineIcon style={{ color: 'gray', margin: '0 auto', fontSize: '200px' }} />
      <Typography variant="h6">{text}</Typography>
    </Box>
  );
}

export default Skeleton;
