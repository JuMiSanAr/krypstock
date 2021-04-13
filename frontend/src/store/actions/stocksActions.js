import {CURRENT_STOCK, IEX_VOLUME, ALL_STOCKS, ALL_STOCK_SYMBOLS, SEARCHED_STOCKS} from "../constants";

export const currentStockAction = (data) => {
    return {
        type: CURRENT_STOCK,
        payload: {
            data
        }
    }
};

export const iexStockVolumeAction = (data) => {
    return {
        type:IEX_VOLUME,
        payload:{
            data
        }
    }
}

export const allStocksAction = (data) => {
    return {
        type:ALL_STOCKS,
        payload:{
            data
        }
    }
}

export const searchedStocksAction = (data) => {
    return {
        type: SEARCHED_STOCKS,
        payload:{
            data
        }
    }
}

export const allStockSymbolsAction = (data) => {
    return {
        type:ALL_STOCK_SYMBOLS,
        payload:{
            data
        }
    }
}