import {combineReducers} from "redux";
import {logInReducer} from './logInReducer'
import {topGainLossReducer} from './topGainLossReducer'

const rootReducer = combineReducers({
    logInReducer,
    topGainLossReducer,
});

export default rootReducer;