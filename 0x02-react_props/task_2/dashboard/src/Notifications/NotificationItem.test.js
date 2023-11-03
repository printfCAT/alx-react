import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

const wrapper = shallow(<NotificationItem />);

describe('NotificationItem Component', () => {
    it('should render Notifications without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
});

describe('NotificationItem test Component', () => {
    it('should render with type="default" and value="test"', () => {
      const wrapper = shallow(<NotificationItem type="default" value="test" />);
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
      expect(wrapper.find('li').text()).toBe('test');
    });
  
    it('should render with html prop containing <u>test</u>', () => {
      const htmlContent = '<u>test</u>';
      const wrapper = shallow(<NotificationItem html={{ __html: htmlContent }} />);
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual({ __html: htmlContent });
    });
  });
