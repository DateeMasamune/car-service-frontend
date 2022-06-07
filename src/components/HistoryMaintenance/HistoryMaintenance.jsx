import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {
  Box, FormControl, MenuItem, Select,
} from '@mui/material';

import wheel from '../../assets/wheel.jpg';
import Skeleton from '../Skeleton/Skeleton';
import useHistoryMaintenance from './useHistoryMaintenance';

function HistoryMaintenance() {
  const {
    carPark,
    serviceStation,
    selectService,
    goToSingleCar,
    filterMaintenance,
    handleChangeService,
  } = useHistoryMaintenance();

  return (
    <>
      <FormControl fullWidth style={{ marginBottom: 20, minWidth: 300 }}>
        <Select
          value={selectService}
          onChange={handleChangeService}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Станция техобслуживании</em>
          </MenuItem>
          <MenuItem value="">Все станции</MenuItem>
          {serviceStation.map((serviceName) => (
            <MenuItem
              // eslint-disable-next-line no-underscore-dangle
              key={serviceName._id}
              // eslint-disable-next-line no-underscore-dangle
              value={serviceName._id}
            >
              {serviceName.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {carPark.filter(filterMaintenance).length === 0 && (
      <Skeleton text="Автомобили еще не проходили тех обслуживание" />
      )}
      {carPark.filter(filterMaintenance).map((car) => (
        // eslint-disable-next-line no-underscore-dangle
        <List onClick={() => goToSingleCar(car._id)} key={car._id} sx={{ width: '100%', bgcolor: 'background.paper', cursor: 'pointer' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={wheel} />
            </ListItemAvatar>
            <Box>
              <Typography
                sx={{ fontWeight: 'bold' }}
                variant="body2"
                color="text.primary"
              >
                {car.brand}
              </Typography>
              <Typography
                sx={{ fontWeight: 'bold' }}
                variant="body2"
                color="text.primary"
              >
                История ТО
              </Typography>
              {car.history.map((history) => (
                <Typography key={history} style={{ color: 'gray', fontSize: '14px' }}>{`${history}`}</Typography>
              ))}
              {car.status === 'ready'
                ? <Typography style={{ color: 'green' }}>Техобслуживание пройдено успешно</Typography>
                : <Typography style={{ color: 'red' }}>Техобслуживание пройдено не до конца</Typography>}
            </Box>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      ))}
    </>

  );
}

export default HistoryMaintenance;
