import {DELETE_PORTFOLIO, USER_ALL_PORTFOLIO} from "../constants";

const initialState = {
    portfolio_list: []
}

export const userAllPortfolioReducer = (state=initialState, action)=>{
  
    if (action.type===USER_ALL_PORTFOLIO){
        console.log(state)
        return {
            ...state, 
            portfolio_list: action.payload
        }
    }
    if(action.type===DELETE_PORTFOLIO){

        return {
            ...state, 
            portfolio_list: state.portfolio_list.splice(action.payload, 1)
        }
    }
    return state;
}
