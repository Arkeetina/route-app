import React from 'react';
import { shallow } from 'enzyme';
import LocationForm from '../../components/LocationForm';
import locations from './fixtures/locations';

test('should correctly render LocationForm', () => {
  const wrapper = shallow(<LocationForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  expect(wrapper).toMatchSnapshot();
  const wrapper = shallow(<LocationForm />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set start off location on input change', () => {
  const value = 'Some destionation';
  const wrapper = shallow(<LocationForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('startOffLocation')).toBe(value);
});

test('should set drop off location on input change', () => {
  const value = 'Some destionation';
  const wrapper = shallow(<LocationForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });
  expect(wrapper.state('dropOffLocation')).toBe(value);
});

test('should call onSubmit form on valid form submision', () => {
  const onSubmitSpy = jest.fn();
  onSubmitSpy(locations[0]);
  const wrapper = shallow(<LocationForm locations={locations[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('error')).toBe('');
  expect(wrapper.state('disabled')).toBe(true);
  expect(onSubmitSpy).toHaveBeenLastCalledWith(locations[0]);
});

test('should set disabled to false on input focuse', () => {
  const wrapper = shallow(<LocationForm />);
  wrapper.find('input').at(0).simulate('focus');
  wrapper.find('input').at(1).simulate('focus');

  expect(wrapper.state('disabled')).toBe(false);
});

test('should set disabled to true for empty inputs', () => {
  const wrapper = shallow(<LocationForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: '',
  });
  wrapper.find('input').at(1).simulate('change', {
    target: '',
  });

  expect(wrapper.state('disabled')).toBe(true);
});

test('should set disabled to true for one empty input', () => {
  const value = 'Some destionation';
  const wrapper = shallow(<LocationForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: '',
  });
  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });

  expect(wrapper.state('disabled')).toBe(true);
});
