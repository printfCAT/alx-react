import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsAread, setNotificationFilter } from './notificationActionCreators';

it('should create an action for markAsRead', () => {
    const index = 1;
    const expectedAction = {
        type: MARK_AS_READ,
        index
    };
    expect(markAsAread(index)).toEqual(expectedAction);
});

it('should create an action for setNotificationFilter', () => {
    const filter = NotificationTypeFilters.URGENT;
    const expectedAction = {
        type: SET_TYPE_FILTER,
        filter
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
});
