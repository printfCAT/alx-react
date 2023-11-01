import { shallow } from 'enzyme';
import App from './App.js';
import React from 'react';

describe('App Component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });
});

describe('App-header Component', () => {
    it('should render a header with the class App-header', () => {
        const wrapper = shallow(<App />);
        const appHeaderDiv = wrapper.find('header.App-header');
        expect(appHeaderDiv.exists()).toBe(true);
    });
});

describe('App-body Component', () => {
    it('should render a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        const appBodyDiv = wrapper.find('div.App-body');
        expect(appBodyDiv.exists()).toBe(true);
    });
});

describe('App-footer Component', () => {
    it('should render a footer with the class App-footer', () => {
        const wrapper = shallow(<App />);
        const appFooterDiv = wrapper.find('footer.App-footer');
        expect(appFooterDiv.exists()).toBe(true);
    });
});
