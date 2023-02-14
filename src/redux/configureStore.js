import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coinsReducers } from './reducers/coinsReducers';

const reducers = combineReducers({ coins: coinsReducers });
const store = configureStore({ reducer: reducers });

export default store;
