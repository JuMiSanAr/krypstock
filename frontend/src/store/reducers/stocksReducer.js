import {CURRENT_STOCK, IEX_VOLUME} from "../constants";

const initialState = {
    current: null,
    iexStockVolume:[],
}

export const stocksReducer =( state= initialState, action)=>{
    if (action.type===CURRENT_STOCK){
        return{
            ...state,
            current: action.payload
        }
    }
    else if (action.type === IEX_VOLUME){
        return {
            ...state,
            iexStockVolume: action.payload
        }
    }
    return state;
}