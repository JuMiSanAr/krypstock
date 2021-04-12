import {SPECIFIC_PORTFOLIO} from "../constants";

const initialState = {
    calculations: []
}

export const specificPortfolioReducer = (state=initialState, action) => {
    if (action.type===SPECIFIC_PORTFOLIO){
        return {
            ...state, 
            calculations: action.payload
        }
    }
    // console.log('in specific reducer', state);
    return state;
    
}
