import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from '../User/Navbar.js';
import Register from '../User/Register.js';
import UserList from '../User/UserList.js';
import Login from '../User/Login.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<App />);
});

it('snapshot app', () => {
  const wrapper = renderer.create(<App />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
