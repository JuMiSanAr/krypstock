// Action types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const LOGIN_USER = 'LOGIN_USER';

export const GAIN_DATA = 'GAIN_DATA';
export const LOSS_DATA = 'LOSS_DATA';

export const CURRENT_STOCK = 'CURRENT_STOCK';

export const ALL_TRANSACTIONS = 'ALL_TRANSACTION';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';

export const ALL_PORTFOLIOS = 'ALL_PORTFOLIOS';
export const SPECIFIC_PORTFOLIO = 'SPECIFIC_PORTFOLIO';

export const USER_ALL_PORTFOLIO = 'USER_ALL_PORTFOLIO';

export const DELETE_PORTFOLIO = 'DELETE_PORTFOLIO';

export const IEX_VOLUME = 'IEX_VOLUME';

export const ALL_CRYPTO_NEWS = 'ALL_CRYPTO_NEWS';
export const ALL_STOCK_NEWS = 'ALL_STOCK_NEWS';

export const CURRENT_CRYPTO = 'CURRENT_CRYPTO';
export const ALL_CRYPTOS = 'ALL_CRYPTOS';

export const ALL_STOCKS = 'ALL_STOCKS';
export const ALL_STOCK_SYMBOLS = 'ALL_STOCK_SYMBOLS';
export const SEARCHED_STOCKS = 'SEARCHED_STOCKS';

export const CURRENT_PAGE = 'CURRENT_PAGE';

// Base URLs to use for fetching
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