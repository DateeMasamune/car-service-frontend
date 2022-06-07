import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useCurrentCar from '../../customHooks/useCurrentCar';

function useHistoryMaintenance() {
  const [selectService, setSelectService] = useState('');
  const { carPark } = useCurrentCar();
  const navigate = useNavigate();
  const serviceStation = useSelector((store) => store.serviceStation);
  const goToSingleCar = (id) => {
    navigate(`/maintenance/${id}`);
  };

  const handleChangeService = (event) => {
    setSelectService(event.target.value);
  };

  const filterMaintenance = (car) => {
    if (selectService === '') {
      if (car.status !== '') {
        return true;
      }
    } else if (car.serviceId === selectService) {
      return true;
    }
    return false;
  };

  return {
    carPark,
    goToSingleCar,
    filterMaintenance,
    serviceStation,
    handleChangeService,
    selectService,
  };
}

export default useHistoryMaintenance;
