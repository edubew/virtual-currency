import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import CoinDetails from '../components/CoinDetails';

window.scrollTo = jest.fn();

describe('Test CoinDetails Component', () => {
  it('should render CoinDetails component', async () => {
    window.scrollTo.mockClear();
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <CoinDetails />
        </Provider>
      </BrowserRouter>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
