import { useEffect, useState } from 'react';
import { formatISO9075, getTime } from 'date-fns';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useCurrentCar from '../../customHooks/useCurrentCar';
import useCurrentService from '../../customHooks/useCurrentService';
import useUpdateReduxStore from '../../customHooks/useUpdateReduxStore';
import steps from '../../mockData/stepMaintenance';
import { writeCar } from '../../redux/actions/actions';

function useMaintenance() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [load, setLoad] = useState(false);
  let historyUpdate = [];
  const dispatch = useDispatch();
  const { currentCar, carPark, pageId } = useCurrentCar();
  const { services } = useCurrentService();
  const navigate = useNavigate();
  const date = formatISO9075(getTime(new Date(), 'dd/MM/yyyy'));

  const updateStatusCar = (currentStep) => {
    if (!steps[activeStep].status) return;
    const newStatusCar = carPark.map((car) => {
      if (car.id === pageId) {
        return {
          ...car,
          status: steps[activeStep].status,
          step: currentStep,
          history: historyUpdate,
        };
      }
      return car;
    });
    useUpdateReduxStore(setLoad, dispatch, writeCar, newStatusCar, 'carParkMock');
  };

  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    historyUpdate = [...currentCar.history, `${steps[activeStep].nameStep} ${date}`];
    updateStatusCar(activeStep + 1, 'next');
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    historyUpdate = currentCar.history.slice(0, currentCar.history.length - 1);
    updateStatusCar(activeStep - 1, 'back');
  };

  useEffect(() => {
    setActiveStep(currentCar.step);
  }, []);

  const backPage = () => (navigate(-1));

  return (
    {
      currentCar,
      services,
      activeStep,
      load,
      backPage,
      handleBack,
      handleNext,
    }
  );
}

export default useMaintenance;
