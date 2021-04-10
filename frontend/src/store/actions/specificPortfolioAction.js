import { SPECIFIC_PORTFOLIO } from "../constants";

export const specificPortfolioAction = (data) => {
    return {
        type: SPECIFIC_PORTFOLIO,
        payload: data
    }
};
