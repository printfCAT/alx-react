import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header Cell" />
    );
    const th = wrapper.find('th');
    expect(th.length).toBe(1);
    expect(th.prop('colSpan')).toBe(2);
    expect(th.text()).toBe('Header Cell');
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header Cell 1"
        textSecondCell="Header Cell 2"
      />
    );
    const th = wrapper.find('th');
    expect(th.length).toBe(2);
    expect(th.at(0).text()).toBe('Header Cell 1');
    expect(th.at(1).text()).toBe('Header Cell 2');
  });

  it('renders two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Data Cell 1"
        textSecondCell="Data Cell 2"
      />
    );
    const tr = wrapper.find('tr');
    expect(tr.length).toBe(1);
    const td = tr.find('td');
    expect(td.length).toBe(2);
    expect(td.at(0).text()).toBe('Data Cell 1');
    expect(td.at(1).text()).toBe('Data Cell 2');
  });
});
