import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../User/Login';
import { shallow } from "enzyme";
import renderer from 'react-test-renderer'
import "../setupTests"



it('renders without crashing', () => {
  shallow(<Login />);
});

it('snapshot app', () => {
  const wrapper = renderer.create(<Login />).toJSON();
  expect(wrapper).toMatchSnapshot();
});