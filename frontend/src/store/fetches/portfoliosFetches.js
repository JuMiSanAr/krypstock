import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";

const portfoliosFetch = () => {
    return fetchAPI(
        'portfolios/',
        null,
        'GET',
        headersWithToken
    )
}

export default portfoliosFetch;

export const specificPortfolioFetch = (id) => {
    console.log('fetching')
    return fetchAPI(
        `portfolios/${id}/`,
        null,
        'GET',
        headersWithToken
    )
}

