import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useCurrentCar from '../../../customHooks/useCurrentCar';
import useCurrentService from '../../../customHooks/useCurrentService';
import useUpdateReduxStore from '../../../customHooks/useUpdateReduxStore';
import { orderDetail } from '../../../redux/actions/actions';

function useSingleCarPage() {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentCar, pageId } = useCurrentCar();
  const { services, serviceStation } = useCurrentService();
  const { supportedСars } = services;
  const { enqueueSnackbar } = useSnackbar();

  const searchDetail = (detail) => (
    !supportedСars[currentCar.brand]?.spareParts.includes(detail)
  );

  const getSupportedСars = useCallback((detail) => (
    searchDetail(detail)
  ), [currentCar, serviceStation]);

  const sendMaintenance = useMemo(() => (
    currentCar.details.some(
      (detail) => !searchDetail(detail) === false,
    )
  ), [serviceStation]);

  const backPage = () => (navigate(-1));

  const handleOrderDetail = (detail) => {
    const order = {
      ...services,
      supportedСars: {
        ...supportedСars,
        [currentCar.brand]: {
          spareParts: [...new Set(supportedСars[currentCar.brand]?.spareParts), detail],
        },
      },
    };

    const newStateServiceStation = serviceStation.map((service) => {
      if (service.id === order.id) {
        return order;
      }
      return service;
    });
    useUpdateReduxStore(setLoad, dispatch, orderDetail, newStateServiceStation, 'serviceStationMock');
  };

  const handleSendCarMaintenance = () => {
    navigate(`/maintenance/${pageId}`);
  };

  useEffect(() => {
    if (!sendMaintenance) enqueueSnackbar('Автомобиль готов к ТО', { variant: 'success' });
  }, [sendMaintenance]);

  return {
    load,
    currentCar,
    services,
    sendMaintenance,
    backPage,
    handleSendCarMaintenance,
    getSupportedСars,
    handleOrderDetail,
  };
}

export default useSingleCarPage;
