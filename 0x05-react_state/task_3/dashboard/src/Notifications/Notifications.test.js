import { shallow } from 'enzyme';
import Notifications from './Notifications.js';
import React from 'react';

const mockHandleDisplayDrawer = jest.fn();
const mockHandleHideDrawer = jest.fn();
const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={mockHandleDisplayDrawer} handleHideDrawer={mockHandleHideDrawer} />);

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

describe('Notifications Component', () => {
    it('should render Notifications without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });
  
    it('should not display the menu item and div.Notifications when displayDrawer is false', () => {
      const wrapper = shallow(<Notifications displayDrawer={false} />);
      expect(wrapper.find('.menuItem').exists()).toBe(false);
      expect(wrapper.find('.Notifications').exists()).toBe(false);
    });
  
    it('should display the menu item and div.Notifications when displayDrawer is true', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      expect(wrapper.find('.menuItem').exists()).toBe(true);
      expect(wrapper.find('.Notifications').exists()).toBe(true);
    });
});

describe('displayDrawer Component', () => {
    it('should call handleDisplayDrawer when clicking on the menu item', () => {
        const menuItem = wrapper.find('.menuItem');
        menuItem.simulate('click');
        expect(mockHandleDisplayDrawer).toHaveBeenCalled();
      });
    
      it('should call handleHideDrawer when clicking on the button', () => {
        const closeButton = wrapper.find('button');
        closeButton.simulate('click');
        expect(mockHandleHideDrawer).toHaveBeenCalled();
    });
});
