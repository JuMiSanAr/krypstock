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

export default portfoliosFetch

