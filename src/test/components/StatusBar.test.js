import React from 'react';
import { shallow } from 'enzyme';
import StatusBar from '../../components/StatusBar';

test('should render StatusBar correctly', () => {
  const wrapper = shallow(<StatusBar />);
  expect(wrapper).toMatchSnapshot();
});
<<<<<<< HEAD
=======

test('should render StatusBar with default message correctly', () => {
  const defautMsg = 'default message';
  const wrapper = shallow(<StatusBar defaultMsg={defautMsg} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render StatusBar with route fail status correctly', () => {
  const routeFailStatus = 'route fail';
  const wrapper = shallow(<StatusBar routeFailStatus={routeFailStatus} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render StatusBar with route in progress status correctly', () => {
  const routeInProgStatus = 'in progress';
  const wrapper = shallow(<StatusBar routeInProgStatus={routeInProgStatus} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render StatusBar with server error correctly', () => {
  const serverError = 'server error';
  const wrapper = shallow(<StatusBar serverError={serverError} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render StatusBar with total time correctly', () => {
  const totalTime = 9000;
  const wrapper = shallow(<StatusBar totalTime={totalTime} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render StatusBar with total distance correctly', () => {
  const totalDistance = 10000;
  const wrapper = shallow(<StatusBar totalDistance={totalDistance} />);
  expect(wrapper).toMatchSnapshot();
});
>>>>>>> dev1
