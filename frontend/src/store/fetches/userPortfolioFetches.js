import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";

const userPortfolioFetch = () => {
    return fetchAPI(
        'portfolios/',
        undefined,
        'GET',
        headersWithToken
    )
}

export default userPortfolioFetch;
