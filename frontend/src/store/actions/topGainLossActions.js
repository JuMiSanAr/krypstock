import { GAIN_DATA, LOSS_DATA } from "../constants";

export const topGainAction = (data) => {
    return {
        type: GAIN_DATA,
        payload: {
            data
        }
    }
};

export const topLossAction = (data) => {
    return {
        type: LOSS_DATA,
        payload: {
            data
        }
    }
};
