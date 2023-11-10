import React, { Component, Fragment } from 'react';
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
        [screenSize.small]: {},
    },
});

const handleButtonClick = () => {
    console.log('Close button has been clicked');
}

class Notifications extends Component {
    constructor(props) {
        super(props)
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(nextProps) {
        return (
        nextProps.listNotifications.length > this.props.listNotifications.length
        );
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;
        return (
            <Fragment>
                <div className={css(styles.menu)}>
                    <p>Your notifications</p>
                </div>
                { displayDrawer && (
                <div className={css(styles.main)}>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {listNotifications.length === 0 && (
                        <NotificationItem value='No new notification for now' />
                        )}
                        {listNotifications.map((notification) => (
                        <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={this.markAsRead} />
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
                        onClick={handleButtonClick}>
                    <img src={close_button} alt="close button" style={{ width: '15px', height: '15px' }}/>
                    </button>
                </div>
                )}
            </Fragment>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: [],
};

Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

export default Notifications;
