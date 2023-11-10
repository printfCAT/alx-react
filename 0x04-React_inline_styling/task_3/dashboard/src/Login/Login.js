import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const screenSize = {
    size: '@media screen and (max-width: 899px)',
};

const styles = StyleSheet.create({
    main: {
        minHeight: '480px',
        padding: '20px 50px',
        fontFamily: 'Helvetica Neue, Open Sans, Helvetica, Arial, sans-serif',
        [screenSize.size]: {
            width: '90%',
            padding: 0,
        }
    },
    button: {
        border: '1px solid grey',
        borderRadius: '2px',
        backgroundColor: 'white',
        marginLeft: '1rem',
        [screenSize.size]: {
            width: '32px',
            display: 'block',
            margin: '0.5rem 0 0 0',
        }
    },
    input: {
        border: '1px solid grey',
        marginLeft: '1rem',
        [screenSize.size]: {
            display: 'block',
            border: 'none',
            margin: 0,
        }
    },
    password: {
        marginLeft: '1rem',
        [screenSize.size]: {
            margin: 0,
        }
    }
});

function Login() {
    return (
        <><div className={css(styles.main)}>
            <p>Login to access the full dashboard</p>
            <label>Email:</label>
            <input className={css(styles.input)} type="text" />
            <label className={css(styles.password)}> Password:</label>
            <input className={css(styles.input)} type="password" />
            <button className={css(styles.button)}>OK</button>
        </div></>
    );
}

export default Login;
