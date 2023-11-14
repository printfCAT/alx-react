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

describe('displayDrawer Component', () => {
  it('should have default state displayDrawer set to false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('handleDisplayDrawer should set displayDrawer to true', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('handleHideDrawer should set displayDrawer to false', () => {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});

describe('logoutSection Component', () => {
  it('should not render logoutSection with default state', () => {
      const headerWrapper = wrapper.find(Header);
      const logoutSection = headerWrapper.find('#logoutSection');
      expect(logoutSection.exists()).toBe(false);
  });

  it('should render logoutSection with state.isLoggedIn true', () => {
      wrapper.setState({ isLoggedIn: true });
      const headerWrapper = wrapper.find(Header);
      const logoutSection = headerWrapper.find('#logoutSection');
      expect(logoutSection.exists()).toBe(true);
  });

  it('should call logOut when logout link is clicked', () => {
      const headerInstance = wrapper.find(Header).instance();
      headerInstance.logOut();
      expect(wrapper.state('isLoggedIn')).toBe(false);
  });

  it('should call logIn with correct arguments', () => {
      const headerInstance = wrapper.find(Header).instance();
      const email = 'example@example.com';
      const password = 'password123';
      headerInstance.logIn(email, password);
      expect(wrapper.state('isLoggedIn')).toBe(true);
      expect(wrapper.state('user')).toEqual({
          email: 'example@example.com',
          password: 'password123',
          isLoggedIn: true,
      });
  });

  it('should call logOut and reset state', () => {
      wrapper.setState({
          isLoggedIn: true,
          user: {
              email: 'example@example.com',
              password: 'password123',
              isLoggedIn: true,
          },
      });
      const headerInstance = wrapper.find(Header).instance();
      headerInstance.logOut();
      expect(wrapper.state('isLoggedIn')).toBe(false);
      expect(wrapper.state('user')).toEqual({
          email: '',
          password: '',
          isLoggedIn: false,
      });
  });
});
