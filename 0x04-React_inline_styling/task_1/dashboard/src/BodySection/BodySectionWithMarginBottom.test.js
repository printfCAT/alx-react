import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<BodySectionWithMarginBottom />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('render without crashing', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper.exists()).toBe(true);
  });

  it('component and props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title='test title'>
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.exists()).toBe(true);
    const div = wrapper.find('.bodySectionWithMargin').first();
    const BodySection = wrapper.find('BodySection');
    const internalBody = BodySection.dive();
    const h2 = internalBody.find('h2');
    const p = internalBody.find('p');
    expect(div.exists()).toBe(true);
    expect(BodySection.exists()).toBe(true);
    expect(internalBody.exists()).toBe(true);
    expect(h2.exists()).toBe(true);
    expect(p.exists()).toBe(true);
    expect(BodySection).toHaveLength(1);
    expect(BodySection.props().title).toEqual('test title');
    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual('test title');
    expect(p).toHaveLength(1);
    expect(p.text()).toEqual('test children node');
  });
});
