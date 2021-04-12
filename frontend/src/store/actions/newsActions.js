import {ALL_CRYPTO_NEWS, ALL_STOCK_NEWS} from "../constants";


export const cryptoNewsAction = (data) => {
    return {
        type: ALL_CRYPTO_NEWS,
        payload: data
    }
};

export const stockNewsAction = (data) => {
    return {
        type: ALL_STOCK_NEWS,
        payload: data
    }
};
