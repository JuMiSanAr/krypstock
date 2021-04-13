import { LOGIN_USER } from "../constants";

export const loginUserAction = (data) => {
    console.log(data)
    return {
        type: LOGIN_USER,
        payload: {
           data
        }
    }
};
