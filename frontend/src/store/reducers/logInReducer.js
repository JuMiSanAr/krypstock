import {LOGIN} from "../constants";

const initialState = {
    token:null,
    authenticated:false
}

export const logInReducer =( state= initialState, action)=>{
    if (action.type===LOGIN){
        return{
            ...state,
            token: action.payload.token,
            authenticated: action.payload.status
        }
    }
    return state;
}

