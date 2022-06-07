/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CustomButton from '../CustomButton/CustomButton';
import CarTitle from '../CarPark/CarTitle/CarTitle';
import Loading from '../Loading/Loading';
import steps from '../../mockData/stepMaintenance';
import useMaintenance from './useMaintenance';

function Maintenance() {
  const {
    currentCar,
    services,
    activeStep,
    load,
    backPage,
    handleBack,
    handleNext,
  } = useMaintenance();

  return (
    <Box sx={{ width: '100%' }}>
      <CustomButton name="Назад" onClick={backPage} />
      <CarTitle currentCar={currentCar} services={services} />
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label.nameStep} {...stepProps}>
              <StepLabel {...labelProps}>{label.nameStep}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Typography sx={{ mt: 2, mb: 1 }}>
          Техобслуживание пройдено
        </Typography>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Назад
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Конец' : 'Далее'}
          </Button>
        </Box>
      )}
      {load && (
      <Loading load={load} />
      )}
    </Box>
  );
}

export default Maintenance;
