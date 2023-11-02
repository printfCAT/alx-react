import React from 'react';
import './Login.css';

function Login() {
    return (
        <><div className="App-login">
            <p>Login to access the full dashboard</p>
            <label>Email:</label>
            <input className='input-email' type="text" />
            <label className='password'> Password:</label>
            <input className='input-password' type="password" />
            <button>OK</button>
        </div></>
    );
}

export default Login;
