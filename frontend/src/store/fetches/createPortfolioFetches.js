import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";

const createPortfolioFetch = (title, description) => {
    return fetchAPI(
        'portfolios/new/',
        {name: title, description: description},
        'POST',
        headersWithToken
    )
}

export default createPortfolioFetch;
