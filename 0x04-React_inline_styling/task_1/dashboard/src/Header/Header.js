import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

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
    }
});

function Header() {
    return (
        <><header className={css(styles.header)}>
            <img className={css(styles.logo)} src={logo} alt="logo" />
            <h1 className={css(styles.h1)}>School dashboard</h1>
        </header></>
    );
}

export default Header;
