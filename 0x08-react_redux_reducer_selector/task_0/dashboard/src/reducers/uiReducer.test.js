import { reducer, initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

it('should return the initial state when no action is passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
});

it('should update the state when SELECT_COURSE action is passed', () => {
    expect(reducer(initialState, { type: 'SELECT_COURSE' })).toEqual({...initialState});
});

it('should update the state when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    expect(reducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
});
