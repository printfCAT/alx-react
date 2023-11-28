import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from './uiActionCreators';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
    fetchMock.restore();
  });

it('should create an action to login', () => {
    const email = 'email@gmail.com';
    const password = 'password';
    const expectedAction = {
        type: LOGIN,
        user: {
            email,
            password
        }
    }
    expect(login(email, password)).toEqual(expectedAction);
});

it('should create an action to logout', () => {
    const expectedAction = {
        type: LOGOUT,
    }
    expect(logout()).toEqual(expectedAction);
});

it('should create an action to display notification drawer', () => {
    const expectedAction = {
        type: DISPLAY_NOTIFICATION_DRAWER,
    }
    expect(displayNotificationDrawer()).toEqual(expectedAction);
});

it('should create an action to hide notification drawer', () => {
    const expectedAction = {
        type: HIDE_NOTIFICATION_DRAWER,
    }
    expect(hideNotificationDrawer()).toEqual(expectedAction);
});

it('dispatches LOGIN and LOGIN_SUCCESS actions when API call succeeds', () => {
    const expectedActions = [
      { type: LOGIN },
      { type: LOGIN_SUCCESS },
    ];

    fetchMock.getOnce('http://localhost:8564/login-success.json', {
      body: {
        "first_name": "Johann",
        "last_name": "Salva",
        "email   ": "johann.salva@holberton.nz",
        "profile_picture": "http://placehold.it/32x32"
      },
      headers: { 'content-type': 'application/json' },
    });

    const store = mockStore({});

    return store.dispatch(loginRequest('email@example.com', 'password'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
});

it('dispatches LOGIN and LOGIN_FAILURE actions when API call fails', () => {
    const expectedActions = [
      { type: LOGIN },
      { type: LOGIN_FAILURE },
    ];

    fetchMock.getOnce('http://localhost:8564/login-failure.json', {
      status: 404,
    });

    const store = mockStore({});

    return store.dispatch(loginRequest('email@example.com', 'password'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
});
