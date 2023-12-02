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
    const output = [];
    const notification = normalizedData.entities.notifications;
    const message = normalizedData.entities.messages;

    for (const id in notification) {
        if (notification[id].author === userId) {
            output.push(message[notification[id].context]);
        }
    }

    return output;
}

export function notificationsNormalizer(data) {
    return normalize(data, [notification]).entities.notifications;
}
