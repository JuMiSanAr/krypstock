import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";


// GET all user transaction
const transactionFetch = () => {

    const token = localStorage.getItem('token');

    return fetchAPI(
        'transactions/',
        null,
        'GET',
        {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
}
    )
}

export default transactionFetch;

// POST new transaction
export const postNewTransactionFetch = (buySell, portfolioID, company, volume, pricePerShare, type) => {
    return fetchAPI(
        'transactions/new/',
        {
            buy_sell: buySell,
            portfolio: portfolioID,
            symbol: company,
            quantity: parseFloat(volume),
            price: parseFloat(pricePerShare),
            type: type,
        },
        'POST',
        headersWithToken
    )
}
