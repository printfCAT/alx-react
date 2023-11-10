import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    main: {
        minHeight: '480px',
        padding: '20px 50px',
        fontFamily: 'Helvetica Neue, Open Sans, Helvetica, Arial, sans-serif',
    },
    button: {
        border: '1px solid grey',
        borderRadius: '2px',
        backgroundColor: 'white',
        marginLeft: '1rem',
    },
    input: {
        border: '1px solid grey',
        marginLeft: '1rem',
    },
    password: {
        marginLeft: '1rem',
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
