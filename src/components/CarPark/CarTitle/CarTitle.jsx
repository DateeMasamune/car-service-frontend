/* eslint-disable react/prop-types */
import React from 'react';
import { Typography } from '@mui/material';

function CarTitle({ currentCar, services }) {
  return (
    <>
      <Typography variant="h2" component="h2" style={{ marginTop: 50 }}>
        {currentCar.brand}
      </Typography>
      <Typography variant="body1" style={{ marginBottom: 50 }}>
        {`Станция техобслуживания: ${services.name}`}
      </Typography>
    </>
  );
}

export default CarTitle;
