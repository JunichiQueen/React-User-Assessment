import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../User/Navbar';
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import "../setupTests";

it('renders without crashing', () => {
    shallow(<Navbar />);
});
  
it('snapshot app', () => {
    const wrapper = renderer.create(<Navbar />).toJSON();
    expect(wrapper).toMatchSnapshot();
});