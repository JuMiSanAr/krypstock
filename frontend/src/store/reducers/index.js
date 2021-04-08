import {combineReducers} from "redux";
import {logInReducer} from './logInReducer';
import {stocksReducer} from './stocksReducer';

const rootReducer = combineReducers({
    logInReducer,
    stocksReducer
});

export default rootReducer;