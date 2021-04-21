import {CURRENT_PAGE} from "../constants";

const initialState = {
    currentPage: window.location.pathname
}

export const currentPageReducer =( state= initialState, action)=>{
    if (action.type===CURRENT_PAGE){
        return{
            ...state,
            currentPage: action.payload.path
        }
    }
    return state;
}