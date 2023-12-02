import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

it('should return the selected filter type', () => {
    const state = { filter: { type: 'someFilterType' } };
    expect(filterTypeSelected(state)).toEqual('someFilterType');
});

it('should return a list of message entities within the reducer', () => {
    const state = {
      notifications: [
        { id: 1, message: 'Notification 1', isRead: false },
        { id: 2, message: 'Notification 2', isRead: true }
      ]
    };
    expect(getNotifications(state)).toEqual([
      { id: 1, message: 'Notification 1', isRead: false },
      { id: 2, message: 'Notification 2', isRead: true }
    ]);
});

it('should return a list of unread message entities within the reducer', () => {
    const state = {
      notifications: [
        { id: 1, message: 'Notification 1', isRead: false },
        { id: 2, message: 'Notification 2', isRead: true },
        { id: 3, message: 'Notification 3', isRead: false }
      ]
    };
    expect(getUnreadNotifications(state)).toEqual([
      { id: 1, message: 'Notification 1', isRead: false },
      { id: 3, message: 'Notification 3', isRead: false }
    ]);
});
