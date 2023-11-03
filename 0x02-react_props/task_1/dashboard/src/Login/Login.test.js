import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login.js';

const wrapper = shallow(<Login />);

describe('Login Component', () => {
    it('should render Header without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
});

describe('Tags Component', () => {
    it('should render img and h1 tags', () => {
        const imgTag = wrapper.find('input');
        const h1Tag = wrapper.find('label');
        expect(imgTag.length()).toBe(2);
        expect(h1Tag.length()).toBe(2);
    });
});
