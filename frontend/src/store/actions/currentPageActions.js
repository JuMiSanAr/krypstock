import {CURRENT_PAGE} from "../constants";

export const currentPageAction = (path) => {
    return {
        type: CURRENT_PAGE,
        payload: {
            path
        }
    }
};
