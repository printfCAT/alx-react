import { courseReducer } from './courseReducer';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { Map } from 'immutable';

it('should return the default state', () => {
    const initialState = courseReducer(undefined, {});
    expect(initialState.toJS()).toEqual({});
});

it('should handle FETCH_COURSE_SUCCESS', () => {
    const testData = {
        id: 1,
        name: "ES6",
        credit: 60
    };
    const action = { type: FETCH_COURSE_SUCCESS, data: testData };
    const newState = courseReducer(undefined, action);
    expect(newState.toJS()).toEqual({
        1: {
            id: 1,
            name: "ES6",
            credit: 60,
            isSelected: false
        }
    });
});

it('should handle SELECT_COURSE', () => {
    const initialState = Map({
        1: {
            id: 1,
            name: "ES6",
            credit: 60,
            isSelected: false
        }
    });
    const action = { type: SELECT_COURSE, index: 1 };
    const newState = courseReducer(initialState, action);
    expect(newState.getIn([1, 'isSelected'])).toEqual(true);
});

it('should handle UNSELECT_COURSE', () => {
    const initialState = Map({
        1: {
            id: 1,
            name: "ES6",
            credit: 60,
            isSelected: true
        }
    });
    const action = { type: UNSELECT_COURSE, index: 1 };
    const newState = courseReducer(initialState, action);
    expect(newState.getIn([1, 'isSelected'])).toEqual(false);
});
