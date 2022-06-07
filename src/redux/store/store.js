import { createStore } from 'redux';

import storeReduxData from '../reducer/storeReduxData';

const store = createStore(
  storeReduxData,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
