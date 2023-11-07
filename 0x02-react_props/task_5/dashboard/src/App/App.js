import React from 'react';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import CourseList from '../CourseList/CourseList.js';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils.js';

function App({ isLoggedIn }) {
  const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ];

  let component = undefined;
  isLoggedIn ? (component = <CourseList listCourses={listCourses}/>) : (component = <Login />);

  return (
    <><Notifications listNotifications={listNotifications}/>
      <Header />
      {component}
      <Footer />
    </>
  );
}

App.defaultProps = {
  isLoggedIn: true,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
