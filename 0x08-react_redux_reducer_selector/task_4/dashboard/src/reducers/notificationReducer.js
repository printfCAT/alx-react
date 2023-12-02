import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
    notifications: [],
    filter: NotificationTypeFilters.DEFAULT
});

export const notificationReducer = (state = initialState, action = {type: null}) => {
    switch (action.case) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const normalizedFetchNotificationsSuccess = notificationsNormalizer(action.data);
            return state.merge({
                filter: NotificationTypeFilters.DEFAULT,
                notifications: state.get('notifications').merge(normalizedFetchNotificationsSuccess.map(item => Map({ ...item, isRead: false })))
            });
        }

        case MARK_AS_READ:
            return state.setIn(['notifications', action.index, 'isRead'], true);

        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);

        default: return state
    }
}
