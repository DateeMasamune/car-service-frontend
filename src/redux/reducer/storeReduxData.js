// import useLocalStorageInit from '../../customHooks/useLocalStorageInit';
// import serviceStationMock from '../../mockData/serviceStationMock';
import {
  ORDER_DETAIL, WRITE_CAR, WRITE_SERVICE_STATION, WRITE_USER,
} from '../types/types';

// useLocalStorageInit('serviceStationMock', serviceStationMock);

const initialState = {
  // eslint-disable-next-line max-len
  // serviceStation: localStorage.getItem('serviceStationMock') ? JSON.parse(localStorage.getItem('serviceStationMock')) : [],
  serviceStation: [],
  // eslint-disable-next-line max-len
  // carPark: localStorage.getItem('carParkMock') ? JSON.parse(localStorage.getItem('carParkMock')) : [],
  carPark: [],
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
};

// eslint-disable-next-line default-param-last
const storeReduxData = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_SERVICE_STATION:
      return { ...state, serviceStation: action.payload };
    case WRITE_CAR:
      return { ...state, carPark: action.payload };
    case ORDER_DETAIL:
      return { ...state, serviceStation: action.payload };
    case WRITE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default storeReduxData;
