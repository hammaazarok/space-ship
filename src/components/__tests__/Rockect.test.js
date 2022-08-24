import React from 'react';
import Renderer from 'react-test-renderer';
import Rockect from '../pages/Rockect';

it('renders correctly', () => {
  const tree = Renderer
    .create(<Rockect />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
