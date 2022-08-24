import React from 'react';
import Renderer from 'react-test-renderer';
import RockectDisplay from '../pages/RockectDisplay';

it('renders correctly', () => {
  const tree = Renderer
    .create(<RockectDisplay />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
