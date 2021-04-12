import {ALL_TRANSACTIONS} from "../constants";

const initialState = {
    transactions: []
}

export const transactionsReducer = (state=initialState, action)=>{
    if (action.type===ALL_TRANSACTIONS){
        // console.log('in transactionsReducer -> action.payload', action.payload);
        return {
            ...state, 
            transactions: action.payload
        }
    }
    return state;
}
