import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";

const transactionFetch = () => {
    return fetchAPI(
        'transactions/',
        undefined,
        'GET',
        headersWithToken
    )
}

export default transactionFetch;
