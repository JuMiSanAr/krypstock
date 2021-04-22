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

// export const logoutAction = () => {
//     return {
//         type: 'logout',
//         payload: {
//             token: undefined,
//             status: false
//         }
//     }
// }