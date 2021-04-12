import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";

const portfoliosFetch = () => {
    return fetchAPI(
        'portfolios/',
        undefined,
        'GET',
        headersWithToken
    )
}

export default portfoliosFetch;


export const specificPortfolioFetch = () => {
    return fetchAPI(
        `portfolios/8/`,
        undefined,
        'GET',
        headersWithToken
    )
}

