import React from 'react';
import Renderer from 'react-test-renderer';
import Profile from '../pages/Profile';

it('renders correctly', () => {
  const tree = Renderer
    .create(<Profile />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
