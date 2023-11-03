import { shallow } from 'enzyme';
import App from './App.js';
import React from 'react';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList.js';

const wrapper = shallow(<App />);

describe('App Component', () => {
    it('should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
});

describe('Notification Component', () => {
    const notificationsComponent = wrapper.find(Notifications);
    expect(notificationsComponent.exists()).toBe(true);
});

describe('Header Component', () => {
    const notificationsComponent = wrapper.find(Header);
    expect(notificationsComponent.exists()).toBe(true);
});

describe('Login Component', () => {
    const notificationsComponent = wrapper.find(Login);
    expect(notificationsComponent.exists()).toBe(true);
});

describe('Footer Component', () => {
    const notificationsComponent = wrapper.find(Footer);
    expect(notificationsComponent.exists()).toBe(true);
});

describe('CourseList Component', () => {
    it('should not display CourseList when isLoggedIn is false', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(CourseList).exists()).toBe(false);
    });
  
    describe('when isLoggedIn is true', () => {
      it('should not include Login component', () => {
        const wrapper = shallow(<App />);
        // Set isLoggedIn to true
        wrapper.setState({ isLoggedIn: true });
        expect(wrapper.find(Login).exists()).toBe(false);
      });
  
      it('should include CourseList component', () => {
        const wrapper = shallow(<App />);
        // Set isLoggedIn to true
        wrapper.setState({ isLoggedIn: true });
        expect(wrapper.find(CourseList).exists()).toBe(true);
      });
    });
  });
