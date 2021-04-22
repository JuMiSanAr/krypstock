import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";

export const loginUserDataFetch = () => {

    const token = localStorage.getItem('token');

    return fetchAPI(
        `user/`,
        undefined,
        'GET',
        {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
}
    )
}
