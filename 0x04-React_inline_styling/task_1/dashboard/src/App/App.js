import React, { Component, Fragment } from 'react';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import CourseList from '../CourseList/CourseList.js';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    minHeight: '410px',
    padding: '20px 50px',
  },
  footer: {
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: '1px solid #E0354B',
    fontFamily: 'Helvetica Neue, Open Sans, Helvetica, Arial, sans-serif',
  }
})

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

class App extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleLogout);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleLogout);
  }

  handleLogout(e) {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

  return (
    <Fragment>
      <Notifications listNotifications={listNotifications} />
      <Header />
      <div className={css(styles.header)}>
        {isLoggedIn ? 
        <BodySectionWithMarginBottom title='Course list'>
          <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom>
        : 
        <BodySectionWithMarginBottom title='Log in to continue'>
          <Login />
        </BodySectionWithMarginBottom>
        }
        <BodySection title='News from the School'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </BodySection>
      </div>
      <div className={css(styles.footer)}>
        <Footer />
      </div>
    </Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
