import React from 'react';
import Renderer from 'react-test-renderer';
import Missions from '../pages/Missions';

it('renders correctly', () => {
  const tree = Renderer
    .create(<Missions />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
