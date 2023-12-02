import { createSelector} from 'reselect';

export const filterTypeSelected = state => state.filter.type;
export const getNotifications = state => state.notifications;
export const getUnreadNotifications = createSelector(
    [getNotifications],
    notifications => {
        return notifications.filter(notification => !notification.isRead);
    }
);
