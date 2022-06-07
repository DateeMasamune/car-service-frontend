/* eslint-disable react/prop-types */
import React from 'react';

import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent, FormControl, FormControlLabel, FormGroup, MenuItem, Select,
} from '@mui/material';
import detailsMock from '../../../mockData/detailsMock';
import CustomButton from '../../CustomButton/CustomButton';
import useDialogAddCar from './useDialogAddCar';

function DialogAddCar({ handlerAddCar, addCar, setLoad }) {
  const {
    carBrands,
    buttonDisabled,
    selectService,
    serviceStation,
    selectCarBrand,
    handleChangeService,
    handleChangeBrand,
    handlerChangeBrand,
    handleAddCar,
  } = useDialogAddCar(handlerAddCar, setLoad);

  return (
    <Dialog onClose={handlerAddCar} open={addCar} maxWidth="xs">
      <DialogContent>
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
            {serviceStation.map((serviceName) => (
              <MenuItem
                key={serviceName.name}
                // eslint-disable-next-line no-underscore-dangle
                value={serviceName._id}
              >
                {serviceName.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ minWidth: 300 }}>
          <Select
            value={selectCarBrand}
            onChange={handlerChangeBrand}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem
              disabled
              value=""
            >
              <em>Марка автомобиля</em>
            </MenuItem>
            {carBrands.map((brand) => (
              <MenuItem key={brand} value={brand}>{brand}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormGroup>
          {detailsMock.map((detail) => (
            <FormControlLabel
              key={detail}
              control={<Checkbox name={detail} onChange={handleChangeBrand} />}
              label={detail}
            />
          ))}
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <CustomButton
          disabled={buttonDisabled}
          name="Добавить автомобиль"
          onClick={handleAddCar}
        />
      </DialogActions>
    </Dialog>
  );
}

export default DialogAddCar;
