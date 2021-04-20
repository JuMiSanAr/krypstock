import {ADD_TRANSACTION, ALL_TRANSACTIONS} from "../constants";

const initialState = {
    transactions: []
}

export const transactionsReducer = (state=initialState, action)=>{
    if (action.type===ALL_TRANSACTIONS){
        return {
            ...state, 
            transactions: action.payload
        }
    } else if (action.type===ADD_TRANSACTION){
        return {
            ...state,
            transactions: [action.payload,...state.transactions]
        }
    }
    return state;
}
