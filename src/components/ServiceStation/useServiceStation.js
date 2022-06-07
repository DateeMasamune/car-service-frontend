import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';

import useUpdateReduxStore from '../../customHooks/useUpdateReduxStore';
import { writeServiceStation } from '../../redux/actions/actions';
import post from '../../api/post';
import get from '../../api/get';
import endPoint from '../../api/endPoint';

function useServiceStation() {
  const [settings, setSettings] = useState([0]);
  const [open, setOpen] = useState(false);
  const [carServiceName, setCarServiceName] = useState('');
  const [allCarBrands, setAllCarBrands] = useState({});
  const [buttonActive, setButtonActive] = useState(true);
  const [descriptonServiceStation, setDescriptonServiceStation] = useState('');
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const serviceStation = useSelector((store) => store.serviceStation);
  const user = useSelector((store) => store.user);
  const { enqueueSnackbar } = useSnackbar();

  const handlerOpenDialog = () => {
    setOpen((prevState) => !prevState);
  };

  const handlerChangeCarServiceName = (event) => {
    setCarServiceName(event.target.value);
  };

  const addSettings = () => {
    setSettings((prevState) => [...prevState, prevState[prevState.length - 1] + 1]);
  };

  const handlerAddCarServiceStation = () => {
    setOpen(false);
    const newServiceStation = {
      // id: Math.random().toString(36).substr(2, 9),
      name: carServiceName,
      description: descriptonServiceStation,
      supportedСars: {
        ...allCarBrands,
      },
      userId: user.userId,
    };
    post(newServiceStation, `${endPoint}/api/autoService/create`, user.token)
      .then((res) => {
        console.log(res);
        if (res) {
          const updateServiceStation = [...serviceStation, res.data];
          useUpdateReduxStore(setLoad, dispatch, writeServiceStation, updateServiceStation)
            .then(() => enqueueSnackbar('Автосервис добавлен', { variant: 'success' }))
            .finally(() => setLoad(false));
          setCarServiceName('');
          setDescriptonServiceStation('');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlerDescriptionServiceStation = (event) => {
    setDescriptonServiceStation(event.target.value);
  };

  useEffect(() => {
    if (Object.keys(allCarBrands).length && !!carServiceName) {
      setButtonActive(false);
    } else {
      setButtonActive(true);
    }
  }, [allCarBrands, carServiceName]);

  useEffect(() => {
    setLoad(true);
    get(`${endPoint}/api/autoService/allService`, user.token)
      .then((res) => {
        if (res) {
          console.log(res.data);
          dispatch(writeServiceStation(res.data));
        }
      })
      .finally(() => setLoad(false));
  }, []);

  return {
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
  };
}

export default useServiceStation;
