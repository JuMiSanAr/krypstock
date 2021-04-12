import { ALL_PORTFOLIOS } from "../constants";

export const portfoliosAction = (data) => {
    return {
        type: ALL_PORTFOLIOS,
        payload: data
    }
};
