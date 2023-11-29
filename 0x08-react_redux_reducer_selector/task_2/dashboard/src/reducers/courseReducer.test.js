import { reducer } from './courseReducer';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

it('should return the default state', () => {
    const initialState = reducer(undefined, {});
    expect(initialState.toJS()).toEqual({ isSelected: false });
});

it('should handle FETCH_COURSE_SUCCESS', () => {
    const testData = {
        id: 1,
        name: "ES6",
        credit: 60
    };
    const action = { type: FETCH_COURSE_SUCCESS, data: testData };
    const newState = reducer(undefined, action);
    expect(newState.toJS()).toEqual({ isSelected: false });
});

it('should handle SELECT_COURSE', () => {
    const action = { type: SELECT_COURSE };
    const newState = reducer(undefined, action);
    expect(newState.toJS()).toEqual({ isSelected: true });
});

it('should handle UNSELECT_COURSE', () => {
    const action = { type: UNSELECT_COURSE };
    const newState = reducer(undefined, action);
    expect(newState.toJS()).toEqual({ isSelected: false });
});
