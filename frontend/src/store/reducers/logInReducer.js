import {LOGIN} from "../constants";
import axios from "axios";

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
    // else if (action.type==='logout') {
    //     delete axios.defaults.headers.common['Authorization'];
    //     return{
    //         ...state,
    //         token: null,
    //         authenticated: false
    //     }
    // }
    return state;
}
