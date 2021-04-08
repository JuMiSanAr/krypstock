import { CURRENT_STOCK } from "../constants";

export const currentStockAction = (data) => {
    return {
        type: CURRENT_STOCK,
        payload: {
            data
        }
    }
};
