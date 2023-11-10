import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const screenSize = {
  size: '@media size and (max-width: 899px)',
};

const styles = StyleSheet.create({
  defaultNotification: {
    color: 'blue',
    [screenSize.size]: {
      fontSize: '20px',
      padding: '10px 8px',
      borderBottom: '1px solid black',
      listStyle: 'none',
    }
  },
  urgentNotification: {
    color: 'red',
    [screenSize.size]: {
      fontSize: '20px',
      padding: '10px 8px',
      borderBottom: '1px solid black',
      listStyle: 'none',
    }
  }
});

class NotificationItem extends React.PureComponent {

  render() {
    const { type, html, value, markAsRead, id } = this.props;
    let li;

    value
      ? (li = <li className={type === 'default' ? css(styles.defaultNotification) : css(styles.urgentNotification)} data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>)
      : (li = (
          <li className={type === 'default' ? css(styles.defaultNotification) : css(styles.urgentNotification)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
        ));

    return li;
  }
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {},
  id: NaN,
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;
