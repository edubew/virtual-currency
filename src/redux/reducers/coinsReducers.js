import { GET_COINS, GET_COIN_DETAILS } from '../actions/coinActions';
import { fetchCoins, fetchCoinsDetails } from '../api/coinsApi';

const initialState = { coinsState: [], dataState: [] };

export const coinsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        coinsState: [...(action.payload || [])],
      };
    case GET_COIN_DETAILS:
      return {
        ...state,
        dataState: [...(action.payload || [])],
      };
    default:
      return state;
  }
};

// Action creators and side effects
export const coinsEffect = async (dispatch) => {
  try {
    const response = await fetchCoins();
    dispatch({ type: GET_COINS, payload: response.coins });
  } catch (error) {
    console.error('Error fetching coins:', error);
  }
};

export const getCoinDetails = (id) => async (dispatch) => {
  try {
    const response = await fetchCoinsDetails(id);
    dispatch({ type: GET_COIN_DETAILS, payload: response.markets_charts });
  } catch (error) {
    console.error(`Error fetching coin details for id ${id}:`, error);
  }
};
