import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export function markAsAread(index) {
    return {
        type: MARK_AS_READ,
        index
    }
}
export const boundMarkAsRead = (index) => dispatch(markAsAread(index));

export function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter
    }
}
export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));
