import { normalize, schema } from 'normalizr';
import notificationsData from '../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
});

export const normalizedData = normalize(notificationsData, [notification]);

export default function getAllNotificationsByUser(userId) {
    return notificationsData.filter((notification) => notification.author.id === userId).map((notification) => notification.context);
}
