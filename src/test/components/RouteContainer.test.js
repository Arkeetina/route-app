import React from 'react';
import { shallow } from 'enzyme';
import { RouteContainer } from '../../components/RouteContainer';

test('should render RouteContainer correctly', () => {
  const wrapper = shallow(<RouteContainer />);
  expect(wrapper).toMatchSnapshot();
});
