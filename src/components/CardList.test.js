import { shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('should render cardList component', () => {
  const mockRobots = 
  expect(shallow(<CardList />)).toMatchSnapshot()
});