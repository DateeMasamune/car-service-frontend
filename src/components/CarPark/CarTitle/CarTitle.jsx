/* eslint-disable react/prop-types */
import React from 'react';
import { Typography } from '@mui/material';
import CustomButton from '../../CustomButton/CustomButton';

function CarTitle({
  currentCar, services, handlerRemoveCar, user,
}) {
  return (
    <>
      <Typography variant="h2" component="h2" style={{ marginTop: 50 }}>
        {currentCar?.brand}
      </Typography>
      <Typography variant="body1" style={{ marginBottom: 50 }}>
        {`Станция техобслуживания: ${services?.name}`}
      </Typography>
      {user?.userId === currentCar?.userId
       && <CustomButton name="Отменить обслуживание" onClick={handlerRemoveCar} />}
    </>
  );
}

export default CarTitle;
