

// Action types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const GAIN_DATA = 'GAIN_DATA';
export const LOSS_DATA = 'LOSS_DATA';

export const CURRENT_STOCK = 'CURRENT_STOCK';
export const ALL_TRANSACTIONS = 'ALL_TRANSACTION';

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

// Iexcloud keys
export const iexSandboxKey = 'Tpk_fec97062db224c2fb7b0b3836ab0e365';
export const iexAPIKey = 'pk_f999055e78bd448c98560aa04b177782';
