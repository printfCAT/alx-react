import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login.js';

describe('Login Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('should render Login without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should have a disabled submit button by default', () => {
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('should enable the submit button after changing email and password', () => {
    // Simulate changing email and password
    wrapper.find('input[type="text"]').simulate('change', {
      target: { value: 'test@example.com' },
    });
    wrapper.find('input[type="password"]').simulate('change', {
      target: { value: 'password123' },
    });

    // Find the submit button and check if it's enabled
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });
});
