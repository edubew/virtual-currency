import { GET_COINS, GET_COIN_DETAILS } from '../actions/coinActions';
import { fetchCoins, fetchCoinsDetails } from '../api/coinsApi';

const initialState = { coinsState: [], dataState: [] };

export const coinsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        coinsState: [...action.payload],
      };
    case GET_COIN_DETAILS:
      return {
        ...state,
        dataState: [...action.payload],
      };
    default:
      return state;
  }
};
