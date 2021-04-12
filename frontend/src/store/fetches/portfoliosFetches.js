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

export const specificPortfolioFetch = (id) => {
    return fetchAPI(
        `portfolios/${id}/`,
        undefined,
        'GET',
        headersWithToken
    )
}

