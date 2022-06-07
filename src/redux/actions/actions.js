import {
  ORDER_DETAIL, WRITE_CAR, WRITE_SERVICE_STATION, WRITE_USER,
} from '../types/types';

export const writeServiceStation = (payload) => ({
  type: WRITE_SERVICE_STATION,
  payload,
});

export const writeCar = (payload) => ({
  type: WRITE_CAR,
  payload,
});

export const orderDetail = (payload) => ({
  type: ORDER_DETAIL,
  payload,
});

export const writeUser = (payload) => ({
  type: WRITE_USER,
  payload,
});
