import { shallow} from 'enzyme';
import React from 'react';
import Card from './Card';

it('should render card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot()
});