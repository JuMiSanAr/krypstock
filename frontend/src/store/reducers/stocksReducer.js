import {CURRENT_STOCK} from "../constants";

const initialState = {
    current: null
}

export const stocksReducer =( state= initialState, action)=>{
    if (action.type===CURRENT_STOCK){
        return{
            ...state,
            current: action.payload
        }
    }
    return state;
}