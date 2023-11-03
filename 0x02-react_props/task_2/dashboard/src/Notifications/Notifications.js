import React from 'react';
import './Notifications.css';
import close_button from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem.js';

function Notifications() {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    }
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type='default' value='New course available' />
                <NotificationItem type='urgent' value='New resume available' />
                <NotificationItem type='urgent' html={getLatestNotification()} />
            </ul>
            <button
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    border: 'none',
                }}
                aria-label='close'
                onClick={handleButtonClick}>
            <img src={close_button} alt="close button" style={{ width: '15px', height: '15px' }}/>
            </button>
        </div>
    );
}

export default Notifications;
