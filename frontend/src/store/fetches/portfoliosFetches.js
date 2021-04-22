import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";

const portfoliosFetch = () => {

    const token = localStorage.getItem('token');

    return fetchAPI(
        'portfolios/',
        null,
        'GET',
        {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
}
    )
}

export default portfoliosFetch;

export const specificPortfolioFetch = (id) => {

    return fetchAPI(
        `portfolios/${id}/`,
        null,
        'GET',
        headersWithToken
    )
}

