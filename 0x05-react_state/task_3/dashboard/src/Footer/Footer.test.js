import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer.js'

const wrapper = shallow(<Footer />);

describe('Header Component', () => {
    it('should render Footer without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should display the link when the user is logged in within the context', () => {
        const wrapper = shallow(<Footer />, { context: { user: { isLoggedIn: true } } });
        expect(wrapper.find('p').text()).toContain('Contact Us');
    });

    it('should not display the link when the user is logged out within the context', () => {
        const wrapper = shallow(<Footer />, { context: { user: { isLoggedIn: false } } });
        expect(wrapper.find('p').text()).not.toContain('Contact Us');
    });
});

describe('Paragrapgh Component', () => {
    it('should render the text "Copyright', () => {
        const pElement = wrapper.find('p');
        expect(pElement.text()).toContain('Copyright');
    });
});
