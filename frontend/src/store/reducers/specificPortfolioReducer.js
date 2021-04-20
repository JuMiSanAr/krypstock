import {SPECIFIC_PORTFOLIO} from "../constants";

const initialState = {
    portfolioInfo: []
}

export const specificPortfolioReducer = (state=initialState, action) => {
    if (action.type===SPECIFIC_PORTFOLIO){
        return {
            ...state, 
            portfolioInfo: action.payload
        }
    }
    return state;
    
}
