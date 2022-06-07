import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  TextField,
} from '@mui/material';
import {
  AddBox,
} from '@mui/icons-material';
import BoxStyled from './styledComponents';

import carServiceIcon from '../../assets/brake-disc.jpg';
import CustomButton from '../CustomButton/CustomButton';
import CustomCard from '../CustomCard/CustomCard';
import ServiceSettings from './ServiceSettings/ServiceSettings';
import Loading from '../Loading/Loading';
import Skeleton from '../Skeleton/Skeleton';
import useServiceStation from './useServiceStation';

function ServiceStation() {
  const {
    serviceStation,
    open,
    carServiceName,
    descriptonServiceStation,
    settings,
    load,
    allCarBrands,
    buttonActive,
    handlerAddCarServiceStation,
    handlerOpenDialog,
    handlerChangeCarServiceName,
    handlerDescriptionServiceStation,
    setAllCarBrands,
    addSettings,
  } = useServiceStation();

  return (
    <>
      <CustomButton name="Добавить станцию техобслуживания" onClick={handlerOpenDialog} />
      <BoxStyled>
        {serviceStation.map((service) => (
          <CustomCard
            // eslint-disable-next-line no-underscore-dangle
            key={service._id}
            icon={carServiceIcon}
            name={service.name}
            description={service.description}
            // eslint-disable-next-line no-underscore-dangle
            link={`/single-page-car-service/${service._id}`}
          />
        ))}
      </BoxStyled>
      <Dialog onClose={handlerOpenDialog} open={open} maxWidth="xs">
        <DialogContent>
          <TextField
            value={carServiceName}
            onChange={handlerChangeCarServiceName}
            style={{ minWidth: 400, marginBottom: 20 }}
            id="standard-basic"
            label="Введи название станции ТО"
            variant="standard"
          />
          <TextField
            value={descriptonServiceStation}
            onChange={handlerDescriptionServiceStation}
            style={{ minWidth: 400, marginBottom: 20 }}
            id="standard-basic"
            label="Описание станции ТО"
            variant="standard"
          />
          {settings.map((settingKey) => (
            <ServiceSettings
              key={settingKey}
              setAllCarBrands={setAllCarBrands}
              allCarBrands={allCarBrands}
            />
          ))}
          <IconButton onClick={addSettings} color="primary" aria-label="add an alarm">
            <AddBox />
          </IconButton>
        </DialogContent>
        <DialogActions>
          <CustomButton
            disabled={buttonActive}
            name="Готово"
            onClick={handlerAddCarServiceStation}
          />
        </DialogActions>
      </Dialog>
      {load && <Loading load={load} />}
      {serviceStation.length === 0 && (
        <Skeleton name="Сервисов еще нет" />
      )}
    </>

  );
}

export default ServiceStation;
