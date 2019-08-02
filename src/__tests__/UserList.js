import React from 'react';
import ReactDOM from 'react-dom';
import UserList from '../User/UserList';
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';
import "../setupTests";
import '../App';

it('renders without crashing', () => {
    shallow(<UserList data={[]}/>);
});
  
it('snapshot app', () => {
    const wrapper = renderer.create(<UserList data={[]}/>).toJSON();
    expect(wrapper).toMatchSnapshot();
});