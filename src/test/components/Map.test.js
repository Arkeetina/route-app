import React from 'react';
import { shallow } from 'enzyme';
import Map from '../../components/Map';

test('should render Map correctly', () => {
  const wrapper = shallow(
    <Map
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Map with path coordinates correctly', () => {
  const path = [
    ["22.372081", "114.107877"],
    ["22.326442", "114.167811"],
    ["22.284419", "114.159510"]
  ];
  const wrapper = shallow(
    <Map
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      path={path}
    />);
  expect(wrapper).toMatchSnapshot();
});
