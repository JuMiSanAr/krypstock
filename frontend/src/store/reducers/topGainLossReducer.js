import {GAIN_DATA, LOSS_DATA} from "../constants";



const initialState = {
    top_gain: [],
    top_loss:[],
};

export const topGainLossReducer = (state = initialState, action) => {
    if (action.type === GAIN_DATA) {
        return {
            ...state,
            top_gain: action.payload
        }
    }
    else if(action.type === LOSS_DATA){
        return {
            ...state,
            top_loss: action.payload
        }
    }
    return state;
};