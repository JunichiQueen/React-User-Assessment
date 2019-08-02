import React from 'react';
import ReactDOM from 'react-dom';
import UserList from '../User/UserList';
import { shallow } from "enzyme";
import renderer from 'react-test-renderer'
import "../setupTests";

it('renders without crashing', () => {
    shallow(<UserList />);
});
  
it('snapshot app', () => {
    const wrapper = renderer.create(<UserList />).toJSON();
    expect(wrapper).toMatchSnapshot();
});