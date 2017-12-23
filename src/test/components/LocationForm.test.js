import React from 'react';
import { shallow } from 'enzyme';
import LocationForm from '../../components/LocationForm';
import locations from './fixtures/locations';

test('should correctly render LocationForm', () => {
  const wrapper = shallow(<LocationForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<LocationForm onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error')).toBe('');
  expect(wrapper.state('disabled')).toBe(true);
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    startOffLocation: locations[0].startOffLocation,
    dropOffLocation: locations[0].dropOffLocation,
  });
});
