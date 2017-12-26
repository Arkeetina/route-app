import React from 'react';
import { shallow } from 'enzyme';
import StatusBar from '../../components/StatusBar';

test('should render StatusBar correctly', () => {
  const wrapper = shallow(<StatusBar />);
  expect(wrapper).toMatchSnapshot();
});
