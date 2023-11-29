import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from '../actions/notificationActionTypes';

const initialState = {
    notifications: [],
    filter: NotificationTypeFilters,
};

export const notificationReducer = (state = initialState, action = {type: null}) => {
    switch (action.case) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            return {
                filter: NotificationTypeFilters.DEFAULT,
                notifications: action.data.map((item) => ({...item, isRead: false}))
            }

        case MARK_AS_READ:
            return {
                ...state,
                notifications: state.notifications.map((item) => item.id === action.index ? {...item, isRead: true} : {...item})
            }

        case SET_TYPE_FILTER:
            return {
                ...state,
                filter: action.filter
            }

        default: return state
    }
}
