import {ALL_PORTFOLIOS, DELETE_PORTFOLIO} from "../constants";

const initialState = {
    portfolios: [],
    portfoliosFetched: false
}

export const portfoliosReducer = (state=initialState, action)=>{
    if (action.type===ALL_PORTFOLIOS){
        return {
            ...state, 
            portfolios: action.payload,
            portfoliosFetched: true
        }
    }
     else if(action.type===DELETE_PORTFOLIO){
         const new_portfolio_list = [...state.portfolios];
         const index = new_portfolio_list.findIndex(element => element.id === action.payload);
         new_portfolio_list.splice(index, 1)
        return {
           /* portfolios:
            [...state.portfolios.results.filter(portfolios => portfolios.id !== action.payload)]*/
            ...state,
            portfolios: new_portfolio_list
        };
    }
    return state;
}
