import {combineReducers} from "redux";
import {logInReducer} from './logInReducer'

const rootReducer = combineReducers({
    logInReducer,
});

export default rootReducer;