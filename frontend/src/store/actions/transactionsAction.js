import { ADD_TRANSACTION, ALL_TRANSACTIONS } from "../constants";

export const transactionsAction = (data) => {
    return {
        type: ALL_TRANSACTIONS,
        payload: data
    }
};

export const addTransactionAction = (data) => {
    return {
        type: ADD_TRANSACTION,
        payload: data
    }
}