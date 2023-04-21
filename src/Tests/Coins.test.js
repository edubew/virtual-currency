import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Coins from '../components/Coins';

describe('Test Coins Component', () => {
  it('should render Coins component', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Coins />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
