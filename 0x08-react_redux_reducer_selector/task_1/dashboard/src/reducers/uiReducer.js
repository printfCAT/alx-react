import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes';
import { Map } from 'immutable';

export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
}

export const reducer = (state = Map(initialState), action = {type: null}) => {
    switch(action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);

        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);

        case LOGIN_SUCCESS:
        case LOGIN:
            return state.set('isUserLoggedIn', true);

        case LOGIN_FAILURE:
        case LOGOUT:
            return state.set('isUserLoggedIn', false);

        default: return state
    }
}
