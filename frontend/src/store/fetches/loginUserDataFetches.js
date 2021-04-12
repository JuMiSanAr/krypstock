import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";

export const loginUserDataFetch = () => {
    return fetchAPI(
        `user/`,
        undefined,
        'GET',
        headersWithToken
    )
}
