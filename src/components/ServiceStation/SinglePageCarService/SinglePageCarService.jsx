import React from 'react';
import {
  Box, Chip, Typography,
} from '@mui/material';

import CustomButton from '../../CustomButton/CustomButton';
import BoxStyled from './styledComponents';
import useSinglePageCarService from './useSinglePageCarService';
import carServiceIcon from '../../../assets/brake-disc.jpg';

function SinglePageCarService() {
  const {
    currentService,
    backPage,
  } = useSinglePageCarService();
  return (
    <Box>
      <CustomButton name="Назад" onClick={backPage} />
      <Typography variant="h2" component="h2" style={{ marginTop: 50 }}>
        {currentService.name}
      </Typography>
      <img alt="icon" src={carServiceIcon} style={{ maxWidth: 400, height: 'auto' }} />
      <Typography variant="body1" style={{ marginBottom: 50 }}>
        {currentService.description}
      </Typography>
      <Typography variant="h6" style={{ marginBottom: 50 }}>
        Марки автомобилей которые мы рассматриваем
      </Typography>
      <BoxStyled>
        {Object.keys(currentService.supportedСars).map((car) => (
          <Chip color="primary" key={car} label={car} />
        ))}
      </BoxStyled>
    </Box>
  );
}

export default SinglePageCarService;
