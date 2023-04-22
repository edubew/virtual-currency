import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import Coins from '../components/Coins';

jest.mock('axios');

const responseData = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 27363,
    market_cap: 529135059039,
    market_cap_rank: 1,
    fully_diluted_valuation: 574162376351,
    total_volume: 18472693106,
    high_24h: 28246,
    low_24h: 27201,
    price_change_24h: -580.4379283007438,
    price_change_percentage_24h: -2.07716,
    market_cap_change_24h: -11095646459.78186,
    market_cap_change_percentage_24h: -2.05387,
    circulating_supply: 19353125,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -60.38593,
    ath_date: '2021-11-10T14:24:11.849Z',
    atl: 67.81,
    atl_change_percentage: 40236.01248,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2023-04-22T07:37:08.824Z',
  },
];

describe('Test Coins Component', () => {
  it('should fetch data from API when page loads', async () => {
    axios.get.mockResolvedValue({ data: responseData });
    let asFragment;
    await act(() => {
      const component = render(
        <BrowserRouter>
          <Provider store={store}>
            <Coins />
          </Provider>
        </BrowserRouter>,
      );
      asFragment = component.asFragment;
    });
    await screen.findAllByText(responseData[0].name);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getAllByText(responseData[0].name)).toBeTruthy();
  });
});
