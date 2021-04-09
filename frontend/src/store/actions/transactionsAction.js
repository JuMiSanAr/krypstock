import { ALL_TRANSACTIONS } from "../constants";

export const transactionsAction = (data) => {
    return {
        type: ALL_TRANSACTIONS,
        payload: data
    }
};
