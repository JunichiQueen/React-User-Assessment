import React from 'react';
import ReactDOM from 'react-dom';
import User from '../User/User';
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import "../setupTests";

it('renders without crashing', () => {
    shallow(<User />);
});
  
it('snapshot app', () => {
    const wrapper = renderer.create(<User />).toJSON();
    expect(wrapper).toMatchSnapshot();
});