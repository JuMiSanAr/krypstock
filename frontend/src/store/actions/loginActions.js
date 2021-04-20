import { LOGIN } from "../constants";

export const loginAction = (token, status) => {
    return {
        type: LOGIN,
        payload: {
            token: token,
            status: status
        }
    }
};
