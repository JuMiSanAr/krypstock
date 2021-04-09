import {ALL_PORTFOLIOS} from "../constants";

const initialState = {
    portfolios: []
}

export const portfoliosReducer = (state=initialState, action)=>{
    if (action.type===ALL_PORTFOLIOS){
        // console.log('in portfoliosReducer -> action.payload', action.payload);
        return {
            ...state, 
            portfolios: action.payload
        }
    }
    return state;
}
