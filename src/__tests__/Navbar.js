import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../User/Navbar';
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import "../setupTests";

it('renders without crashing', () => {
    shallow(<Router><Navbar /></Router>);
});
  
it('snapshot app', () => {
    const wrapper = renderer.create(<Router><Navbar /></Router>).toJSON();
    expect(wrapper).toMatchSnapshot();
});