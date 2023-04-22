import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { coinsReducers } from './reducers/coinsReducers';

const store = configureStore({
  reducer: {
    coins: coinsReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
