import {combineReducers} from "redux";
import {logInReducer} from './logInReducer';
import {stocksReducer} from './stocksReducer';
import {transactionsReducer} from './transactionsReducer';
import {topGainLossReducer} from './topGainLossReducer';
import {portfoliosReducer} from './portfoliosReducer';

const rootReducer = combineReducers({
    logInReducer,
    stocksReducer,
    transactionsReducer,
    topGainLossReducer,
    portfoliosReducer
});

export default rootReducer;