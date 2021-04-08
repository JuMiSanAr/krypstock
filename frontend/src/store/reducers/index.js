import {combineReducers} from "redux";
import {logInReducer} from './logInReducer'
import {topGainLossReducer} from './topGainLossReducer'
import {stocksReducer} from './stocksReducer';

const rootReducer = combineReducers({
    logInReducer,
    stocksReducer,
    topGainLossReducer,
});

export default rootReducer;