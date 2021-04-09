import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";


// GET all user transaction
const transactionFetch = () => {
    return fetchAPI(
        'transactions/',
        undefined,
        'GET',
        headersWithToken
    )
}

export default transactionFetch;

// POST new transaction
export const postNewTransactionFetch = (buySell, portfolioID, company, volume, pricePerShare, type) => {
    return fetchAPI(
        'transactions/new/',
        {
            buy_sell: buySell,
            portfolio: parseInt(portfolioID),
            symbol: company,
            quantity: parseInt(volume),
            price: parseInt(pricePerShare),
            type: type,
        },
        'POST',
        headersWithToken
    )
}

