import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import endPoint from '../../api/endPoint';
import get from '../../api/get';
import { writeCar } from '../../redux/actions/actions';

function useCarPark() {
  const [addCar, setAddCar] = useState(false);
  const [load, setLoad] = useState(false);
  const carParkRedux = useSelector((store) => store.carPark);
  const serviceStation = useSelector((store) => store.serviceStation);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const description = useCallback((carId) => (
    serviceStation.find((service) => service.id === carId)?.name
  ), [carParkRedux, serviceStation]);

  const handlerAddCar = () => {
    setAddCar((prevState) => !prevState);
  };

  const filterReadyMaintenance = (car) => (car.status === '');

  useEffect(() => {
    setLoad(true);
    get(`${endPoint}/api/car/allCars`, user.token)
      .then((res) => {
        dispatch(writeCar(res.data));
      })
      .finally(() => setLoad(false));
  }, []);

  return {
    addCar,
    load,
    carParkRedux,
    setLoad,
    description,
    handlerAddCar,
    filterReadyMaintenance,
  };
}

export default useCarPark;
