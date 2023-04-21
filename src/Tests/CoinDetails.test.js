import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import CoinDetails from '../components/CoinDetails';

describe('Test CoinDetails Component', () => {
  it('should render CoinDetails component', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <CoinDetails />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
