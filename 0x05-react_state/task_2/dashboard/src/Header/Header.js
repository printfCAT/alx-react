import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import appContext from '../App/AppContext';

const styles = StyleSheet.create({
    logo: {
        width: '170px',
        height: '150px',
        paddingBottom: '10px',
        paddingTop: '5px',
    },
    header: {
        borderBottom: '3px solid #E0354B',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Helvetica Neue, Open Sans, Helvetica, Arial, sans-serif',
    },
    h1: {
        color: '#E0354B',
        marginLeft: '20px',
    },
    p: {
        alignItems: 'center',
        marginLeft: '45%',
    },
    logOutSpanSection: {
        cursor: 'pointer',
        color: 'blue',
    }
});

class Header extends React.Component {

    static contextType = appContext;

    render() {
        const { user, logOut } = this.context;
        return (
            <React.Fragment>
                <header className={css(styles.header)}>
                <img className={css(styles.logo)} src={logo} alt="logo" />
                <h1 className={css(styles.h1)}>School dashboard</h1>
                </header>
                { user.isLoggedIn && (
                    <div id='logoutSection'>
                        <p className={css(styles.p)}>Welcome <b>{user.email}</b> (<span onClick={logOut} className={css(styles.logOutSpanSection)}>logout</span>)</p>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default Header;
