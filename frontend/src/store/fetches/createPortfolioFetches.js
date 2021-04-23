import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";

const createPortfolioFetch = (title, description) => {

    const token = localStorage.getItem('token');

    return fetchAPI(
        'portfolios/new/',
        {name: title, description: description},
        'POST',
        {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
}
    )
}

export default createPortfolioFetch;
