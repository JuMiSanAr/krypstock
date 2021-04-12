import {CURRENT_STOCK, IEX_VOLUME} from "../constants";

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