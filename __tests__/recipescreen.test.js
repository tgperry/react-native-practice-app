import React from 'react';
import renderer from 'react-test-renderer';
import RecipeScreen from '../screens/RecipeScreen';

test('renders correctly', () => {
  const tree = renderer.create(<RecipeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});