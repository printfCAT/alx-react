import React from 'react';

export const user = {
    email: '',
    password: '',
    isLoggedIn: false
}

export const LogOut = () => {};

const appContext = React.createContext({ user, LogOut });

export default appContext;
