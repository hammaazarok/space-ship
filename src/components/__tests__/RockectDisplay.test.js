import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import RockectDisplay from '../pages/RockectDisplay';

it('renders correctly', () => {
  const tree = Renderer
    .create(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <RockectDisplay
              key={0}
              id={0}
              reserved={false}
              name="rockect.rocket_name"
              description="rockect.description"
              img={[]}
              bookingHandler={() => {}}
            />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
