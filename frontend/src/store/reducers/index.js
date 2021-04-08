import {combineReducers} from "redux";
import {logInReducer} from './logInReducer';
import {stocksReducer} from './stocksReducer';
import {transactionsReducer} from './transactionsReducer';

const rootReducer = combineReducers({
    logInReducer,
    stocksReducer,
    transactionsReducer
});

export default rootReducer;