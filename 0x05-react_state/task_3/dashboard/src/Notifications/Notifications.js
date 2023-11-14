import React from 'react';
import close_button from '../assets/close-icon.png';
import NotificationItem from './NotificationItem.js';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape.js';
import { StyleSheet, css } from 'aphrodite';

const screenSize = {
    size: '@media screen and (max-width: 899px)',
};

const styles = StyleSheet.create({
    main: {
        border: '1px dotted #E0354B',
        padding: '1rem',
        borderRadius: '5px',
        [screenSize.size]: {
            width: '90%',
            border: 'none',
            backgroundColor: 'white',
        },
    },
    menu: {
        textAlign: 'right',
        marginRight: '35px',
        cursor: 'pointer',
        color: 'blue',
        [screenSize.small]: {},
    },
});

class Notifications extends React.Component {

    render() {
        const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;
        return (
            <React.Fragment>
                <div className={css(styles.menu)}>
                    <p onClick={handleDisplayDrawer}>Your notifications</p>
                </div>
                { displayDrawer && (
                <div className={css(styles.main)}>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {listNotifications.length === 0 && (
                        <NotificationItem value='No new notification for now' />
                        )}
                        {listNotifications && listNotifications.map((notification) => (
                        <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markNotificationAsRead={markNotificationAsRead} id={notification.id} />
                        ))}
                    </ul>
                    <button
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            border: 'none',
                        }}
                        aria-label='close'
                        onClick={handleHideDrawer}>
                    <img src={close_button} alt="close button" style={{ width: '15px', height: '15px', cursor: 'pointer' }}/>
                    </button>
                </div>
                )}
            </React.Fragment>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {}
}

export default Notifications;
