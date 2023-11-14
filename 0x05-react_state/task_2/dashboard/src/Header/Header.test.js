import { shallow, mount } from 'enzyme';
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

describe('logOut Component', () => {
    it('should not render logoutSection with default context', () => {
        const wrapper = shallow(<Header />);
        const logoutSection = wrapper.find('#logoutSection');
        expect(logoutSection.exists()).toBe(false);
    });

    it('should render logoutSection with user-defined context', () => {
        const context = {
            user: {
                isLoggedIn: true,
                email: 'example@example.com',
            },
            logOut: () => {},
        };
        const wrapper = mount(
            <Header />,
            {
                context: context,
            }
        );
        const logoutSection = wrapper.find('#logoutSection');
        expect(logoutSection.exists()).toBe(true);
    });

    it('should call logOut when logout link is clicked', () => {
        const logOutSpy = jest.fn();
        const context = {
            user: {
                isLoggedIn: true,
                email: 'example@example.com',
            },
            logOut: logOutSpy,
        };
        const wrapper = mount(
            <Header />,
            {
                context: context,
            }
        );

        wrapper.find('.logOutSpanSection').simulate('click');
        expect(logOutSpy).toHaveBeenCalled();
    });
});
