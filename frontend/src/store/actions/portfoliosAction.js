import { ALL_PORTFOLIOS } from "../constants";

export const portfoliossAction = (data) => {
    return {
        type: ALL_PORTFOLIOS,
        payload: data
    }
};
