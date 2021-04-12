import {LOGIN_USER} from "../constants";

const initialState = {
    user_data : []
}

export const logInUserReducer =( state= initialState, action)=>{
    if (action.type===LOGIN_USER){
        return{
            ...state,
            user_data: action.payload
        }
    }
    return state;
}
