import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header.js';

const wrapper = shallow(<Header />);

describe('Header Component', () => {
    it('should render Header without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
});

describe('Tags Component', () => {
    it('should render img and h1 tags', () => {
        const imgTag = wrapper.find('img');
        const h1Tag = wrapper.find('h1');
        expect(imgTag.exists()).toBe(true);
        expect(h1Tag.exists()).toBe(true);
    });
});
