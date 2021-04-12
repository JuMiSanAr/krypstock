import {combineReducers} from "redux";
import {logInReducer} from './logInReducer';
import {stocksReducer} from './stocksReducer';
import {transactionsReducer} from './transactionsReducer';
import {topGainLossReducer} from './topGainLossReducer';
import {portfoliosReducer} from './portfoliosReducer';
import {specificPortfolioReducer} from './specificPortfolioReducer';
import {logInUserReducer} from './loginUserReducer';

const rootReducer = combineReducers({
    logInReducer,
    stocksReducer,
    transactionsReducer,
    topGainLossReducer,
    portfoliosReducer,
    specificPortfolioReducer,
    logInUserReducer,
});

export default rootReducer;