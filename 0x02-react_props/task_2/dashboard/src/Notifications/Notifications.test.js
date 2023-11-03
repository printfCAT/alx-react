import { shallow } from 'enzyme';
import Notifications from './Notifications.js';
import React from 'react';

const wrapper = shallow(<Notifications />);

describe('Notification Component', () => {
    it('should render Notifications without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
});

describe('Notification-list Component', () => {
    it('should render list items', () => {
        const ulItems = wrapper.find('ul');
        const NotificationItems = wrapper.find('NotificationItem');
        expect(ulItems.exists()).toBe(true);
        expect(NotificationItems.exists()).toBe(true);
    });
});

describe('Notification-text Component', () => {
    it('should render the text "Here is a list of notifications"', () => {
        const text = wrapper.find('p').text();
        expect(text).toBe('Here is the list of notifications');
    });
});

describe('First NotificationItem Component', () => {
    it('should render the correct HTML', () => {
        const NotificationItems = wrapper.find('NotificationItem');
        const firstNotification = NotificationItems.first();

        const htmlContent = firstNotification.html();

        expect(htmlContent).toBe('<li data-notification-type="default">New course available</li>');
    });
});
