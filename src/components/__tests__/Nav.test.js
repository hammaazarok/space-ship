import React from 'react';
import Renderer from 'react-test-renderer';
import Nav from '../Nav';

it('renders correctly', () => {
  const tree = Renderer
    .create(<Nav />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
