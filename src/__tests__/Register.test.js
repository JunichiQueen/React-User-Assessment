import React from 'react';
import ReactDOM from 'react-dom';
import Register from '../User/Register';
import { shallow } from "enzyme";
import renderer from 'react-test-renderer'
import "../setupTests"

it('renders without crashing', () => {
    shallow(<Register />);
});
  
it('snapshot app', () => {
    const wrapper = renderer.create(<Register />).toJSON();
    expect(wrapper).toMatchSnapshot();
});