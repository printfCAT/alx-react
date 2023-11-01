import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

describe('getFullYear', () => {
    it('should return the current year', () => {
        const currentYear = getFullYear();
        const expectedYear = new Date().getFullYear();
        expect(currentYear).toBe(expectedYear);
    });
});

describe('getFooterCopy', () => {
    it('should return Holberton School if argument is true else Holberton School main dashboard', () => {
        const True = getFooterCopy(true);
        const False = getFooterCopy(false);
        expect(True).toBe('Holberton School');
        expect(False).toBe('Holberton School main dashboard');
    });
});

describe('getLatestNotification', () => {
    it('should return { __html: "<strong>Urgent requirement</strong> - complete by EOD" }', () => {
        const notification = getLatestNotification();
        expect(notification).toEqual({ __html: '<strong>Urgent requirement</strong> - complete by EOD' });
    });
});
