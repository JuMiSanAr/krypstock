import { USER_ALL_PORTFOLIO } from "../constants";

export const userPortfolioAction = (data) => {
    return {
        type: USER_ALL_PORTFOLIO,
        payload: data
    }
};
