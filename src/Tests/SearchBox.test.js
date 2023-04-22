import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import SearchBox from '../components/SearchBox';

describe('Test SearchBox Component', () => {
  it('should render SearchBox component', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SearchBox />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
