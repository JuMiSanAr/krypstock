import {CURRENT_CRYPTO, ALL_CRYPTOS} from "../constants";

export const currentCryptoAction = (data) => {
    return {
        type: CURRENT_CRYPTO,
        payload: {
            data
        }
    }
};

export const allCryptosAction = (data) => {
    return {
        type: ALL_CRYPTOS,
        payload:{
            data
        }
    }
}