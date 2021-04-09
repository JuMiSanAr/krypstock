import {combineReducers} from "redux";
import {logInReducer} from './logInReducer';
import {stocksReducer} from './stocksReducer';
import {transactionsReducer} from './transactionsReducer'
import {topGainLossReducer} from './topGainLossReducer'
import {userAllPortfolioReducer} from './userAllPortfolioReducer'
const rootReducer = combineReducers({
    logInReducer,
    stocksReducer,
    transactionsReducer,
    topGainLossReducer,
    userAllPortfolioReducer,
    
});

export default rootReducer;