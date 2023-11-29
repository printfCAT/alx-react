import { reducer, initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

it('should return the initial state when no action is passed', () => {
    expect(reducer(undefined, {}).toJS()).toEqual(initialState);
});

it('should update the state when SELECT_COURSE action is passed', () => {
    const newState = reducer(initialState, { type: 'SELECT_COURSE' });
    expect(newState.toJS()).toEqual(initialState);
});

it('should update the state when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const expectedState = {
        ...initialState,
        isNotificationDrawerVisible: true,
    };
    const newState = reducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(newState.toJS()).toEqual(expectedState);
});
