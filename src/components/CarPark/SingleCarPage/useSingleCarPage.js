import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useCurrentCar from '../../../customHooks/useCurrentCar';
import useCurrentService from '../../../customHooks/useCurrentService';
import useUpdateReduxStore from '../../../customHooks/useUpdateReduxStore';
import { orderDetail } from '../../../redux/actions/actions';
import put from '../../../api/put';
import endPoint from '../../../api/endPoint';
import deleteQ from '../../../api/delete';

function useSingleCarPage() {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentCar, pageId } = useCurrentCar();
  const { services, serviceStation } = useCurrentService();
  const { supportedСars } = services;
  const { enqueueSnackbar } = useSnackbar();
  const user = useSelector((state) => state.user);

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
    setLoad(true);
    const order = {
      ...services,
      supportedСars: {
        ...supportedСars,
        [currentCar.brand]: {
          spareParts: [...new Set(supportedСars[currentCar.brand]?.spareParts), detail],
        },
      },
    };
    // eslint-disable-next-line no-underscore-dangle
    put(order, `${endPoint}/api/autoService/updateService/${serviceStation[0]._id}`, user.token)
      .then((res) => {
        console.log('res', res);
        if (res.data) {
          const newStateServiceStation = serviceStation.map((service) => {
            if (service.id === order.id) {
              return order;
            }
            return service;
          });
          useUpdateReduxStore(setLoad, dispatch, orderDetail, newStateServiceStation);
        }
      })
      .finally(() => setLoad(false));
  };

  const handleSendCarMaintenance = () => {
    navigate(`/maintenance/${pageId}`);
  };

  const handlerRemoveCar = () => {
    setLoad(true);
    // eslint-disable-next-line no-underscore-dangle
    deleteQ(`${endPoint}/api/car/remove/${currentCar._id}`, user.token)
      .then((res) => {
        if (res) {
          navigate('/car-park');
        }
      })
      .finally(() => setLoad(false));
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
    user,
    handlerRemoveCar,
  };
}

export default useSingleCarPage;
