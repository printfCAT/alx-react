import { shallow } from 'enzyme';
import Notifications from './Notifications';
import React from 'react';

describe('Notification Component', () => {
    it('should render Notifications without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });
});

describe('Notification-list Component', () => {
    it('should render three list items', () => {
        const wrapper = shallow(<Notifications />);
        const listItems = wrapper.find('ul li');
        expect(listItems.length).toBe(3);
    });
});

describe('Notification-text Component', () => {
    it('should render the text "Here is a list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        const text = wrapper.find('p').text();
        expect(text).toBe('Here is the list of notifications');
    });
});
