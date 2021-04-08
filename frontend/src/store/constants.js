

// Action types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const GAIN_DATA = 'GAIN_DATA';
export const LOSS_DATA = 'LOSS_DATA';

// Base URLs to use for fetching
export const baseUrlLocal = 'http://localhost:8000/api/';
export const baseUrlServer = 'https://krypstock.propulsion-learn.ch/api/';

// Header types
const token = localStorage.getItem('token');

export const headers = new Headers({
    'Content-Type': 'application/json'
});

export const headersWithToken = new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
})

