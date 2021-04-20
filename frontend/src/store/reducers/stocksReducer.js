import {CURRENT_STOCK, IEX_VOLUME, ALL_STOCKS, ALL_STOCK_SYMBOLS, SEARCHED_STOCKS} from "../constants";

const initialState = {
    current: null,
    iexStockVolume:[],
    allStocks: [],
    allSymbols: [],
    searchedStocks: []
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
    } else if (action.type === ALL_STOCKS) {
        return {
            ...state,
            allStocks: action.payload.data
        }
    } else if (action.type === ALL_STOCK_SYMBOLS) {
        return {
            ...state,
            allSymbols: action.payload.data
        }
    } else if (action.type === SEARCHED_STOCKS){
        return {
            ...state,
            searchedStocks: action.payload.data
        }
    }
    return state;
}