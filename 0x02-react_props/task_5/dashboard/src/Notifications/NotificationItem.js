import React from "react";
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  let li;

  value
    ? (li = <li data-notification-type={type}>{value}</li>)
    : (li = (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
      ));

  return li;
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

export default NotificationItem;
