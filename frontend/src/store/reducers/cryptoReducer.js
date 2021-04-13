import {CURRENT_CRYPTO, ALL_CRYPTOS} from "../constants";

const initialState = {
    current: null,
    allCryptos:[],
}

export const cryptoReducer =( state= initialState, action)=>{
    if (action.type===CURRENT_CRYPTO){
        return{
            ...state,
            current: action.payload
        }
    }
    else if (action.type === ALL_CRYPTOS){
        return {
            ...state,
            allCryptos: action.payload.data
        }
    }
    return state;
}