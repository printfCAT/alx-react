import React from 'react';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';

function App() {
  return (
    <><Notifications />
      <div className='App'>
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
