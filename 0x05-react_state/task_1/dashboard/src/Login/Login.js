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

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
            enableSubmit: false
        };
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        this.setState({ isLoggedIn: true });
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
        if (event.target.value.length > 0 && this.state.password.length > 0) {
			this.setState({ enableSubmit: true })
		} else {
			this.setState({ enableSubmit: false })
		}
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
        if (event.target.value.length > 0 && this.state.email.length > 0) {
			this.setState({ enableSubmit: true })
		} else {
			this.setState({ enableSubmit: false })
		}
    }

    render() {
        return (
            <React.Fragment>
                <div className={css(styles.main)}>
                    <p>Login to access the full dashboard</p>
                    <form action='' onSubmit={this.handleLoginSubmit}>
                        <label>Email:</label>
                        <input className={css(styles.input)} type="text" value={this.state.email} onChange={this.handleChangeEmail} />
                        <label className={css(styles.password)}> Password:</label>
                        <input className={css(styles.input)} type="password" value={this.state.password} onChange={this.handleChangePassword} />
                        <input type='submit' className={css(styles.button)} value='OK' disabled={!this.state.enableSubmit} />
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;
