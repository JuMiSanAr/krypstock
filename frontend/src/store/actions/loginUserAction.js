import { LOGIN_USER } from "../constants";

export const loginUserAction = (data) => {
    return {
        type: LOGIN_USER,
        payload: {
           data
        }
    }
};
