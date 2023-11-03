import React, { useState } from 'react';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import CourseList from '../CourseList/CourseList.js';

function App() {
  const [isLoggedIn] = useState(false);

  return (
    <><Notifications />
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </>
  );
}

export default App;
