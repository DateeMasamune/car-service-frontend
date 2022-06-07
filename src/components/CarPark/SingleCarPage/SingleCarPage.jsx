import React from 'react';
import {
  Box, List, ListItem, ListItemText, Typography,
} from '@mui/material';

import CustomButton from '../../CustomButton/CustomButton';
import Loading from '../../Loading/Loading';
import CarTitle from '../CarTitle/CarTitle';
import useSingleCarPage from './useSingleCarPage';

function SingleCarPage() {
  const {
    load,
    currentCar,
    services,
    sendMaintenance,
    backPage,
    handleSendCarMaintenance,
    getSupportedСars,
    handleOrderDetail,
  } = useSingleCarPage();

  return (
    <Box>
      {load && (
        <Loading load={load} />
      )}
      <CustomButton name="Назад" onClick={backPage} />
      <CarTitle currentCar={currentCar} services={services} />
      <Box style={{ marginBottom: 50 }}>
        <CustomButton name="Отправить автомобиль на техобслуживание" onClick={handleSendCarMaintenance} disabled={sendMaintenance} />
      </Box>
      <Typography variant="h5" style={{ marginBottom: 50 }}>
        Запчасти которые нужно поменять:
      </Typography>
      {currentCar.details.map((detail) => (
        <List key={detail}>
          <ListItem style={{ background: getSupportedСars(detail) ? 'red' : '#1976d2', color: 'white' }}>
            <ListItemText primary={detail} />
            {getSupportedСars(detail) && (
            <Box style={{
              display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
            }}
            >
              <Typography>
                Нет в наличии
              </Typography>
              <CustomButton name="Заказать деталь" onClick={() => handleOrderDetail(detail)} />

            </Box>
            )}
          </ListItem>
        </List>
      ))}
    </Box>
  );
}

export default SingleCarPage;
