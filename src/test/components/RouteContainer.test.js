import React from 'react';
import { shallow } from 'enzyme';
import { RouteContainer } from '../../components/RouteContainer';
import locations from './fixtures/locations';

test('should render RouteContainer correctly', () => {
  const wrapper = shallow(<RouteContainer />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle startSetRoute', () => {
  const startSetRoute = jest.fn();
  const wrapper = shallow(
    <RouteContainer
      startSetRoute={startSetRoute}
      path={locations[0]}
    />);
  wrapper.find('LocationForm').prop('onSubmit')(locations[0]);
  expect(startSetRoute).toHaveBeenLastCalledWith(locations[0]);
});
