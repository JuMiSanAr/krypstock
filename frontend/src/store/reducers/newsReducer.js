import {ALL_CRYPTO_NEWS, ALL_STOCK_NEWS} from "../constants";

const initialState = {
    cryptoNews: [],
    stockNews: []
}

export const newsReducer = (state=initialState, action)=>{
    if (action.type===ALL_CRYPTO_NEWS) {
        return {
            ...state,
            cryptoNews: action.payload,
        }
    }
     else if (action.type===ALL_STOCK_NEWS) {
        return {
            ...state,
            stockNews: action.payload,
        }
    }
    return state;
}