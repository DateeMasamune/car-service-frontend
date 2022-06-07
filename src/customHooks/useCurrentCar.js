import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function useCurrentCar() {
  const location = useLocation().pathname.split('/');
  const carPark = useSelector((store) => store.carPark);
  const pageId = location[location.length - 1];

  const currentCar = useMemo(() => (
    // eslint-disable-next-line no-underscore-dangle
    carPark.find((car) => car._id === pageId)
  ), [carPark]);

  return {
    currentCar,
    carPark,
    pageId,
  };
}

export default useCurrentCar;
