import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer.js'

const wrapper = shallow(<Footer />);

describe('Header Component', () => {
    it('should render Header without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
});

describe('Paragrapgh Component', () => {
    it('should render the text "Copyright', () => {
        const pElement = wrapper.find('p');
        expect(pElement.text()).toContain('Copyright');
    });
});
