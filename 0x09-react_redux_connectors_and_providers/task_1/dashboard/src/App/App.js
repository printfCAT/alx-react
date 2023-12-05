import React from 'react';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import CourseList from '../CourseList/CourseList.js';
import { getLatestNotification } from '../utils/utils.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';
import { user } from './AppContext.js';
import appContext from './AppContext.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

function displayNotificationDrawer() {
  return {
      type: "DISPLAY_NOTIFICATION_DRAWER",
  }
}

function hideNotificationDrawer() {
  return {
      type: "HIDE_NOTIFICATION_DRAWER",
  }
}

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

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.get('isUserLoggedIn'),
    displayDrawer: state.uiReducer.get('isNotificationDrawerVisible')
  }
}

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: listNotifications
    };
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
      this.state.logOut();
    }
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true
      },
    });
  }

  logOut() {
    this.setState({ user: user });
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(notification => notification.id !== id)
    });
}

  render() {
    const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;
    const { user, logOut, listNotifications } = this.state;
    const value = { user, logOut };

  return (
    <appContext.Provider value={value}>
      <Notifications listNotifications={listNotifications} displayDrawer={displayDrawer} handleDisplayDrawer={displayNotificationDrawer} handleHideDrawer={hideNotificationDrawer} markNotificationAsRead={this.markNotificationAsRead} />
      <Header />
      <div className={css(styles.header)}>
        {user.isLoggedIn ? 
        <BodySectionWithMarginBottom title='Course list'>
          <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom>
        : 
        <BodySectionWithMarginBottom title='Log in to continue'>
          <Login logIn={this.logIn} />
        </BodySectionWithMarginBottom>
        }
        <BodySection title='News from the School'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </BodySection>
      </div>
      <div className={css(styles.footer)}>
        <Footer />
      </div>
      </appContext.Provider>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
