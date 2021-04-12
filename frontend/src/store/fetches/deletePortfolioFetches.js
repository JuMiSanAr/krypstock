import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";

const deletePortfolioFetch = (id) => {
    return fetchAPI(
        `portfolios/delete/${id}/`,
        {id:parseInt(id)},
        'DELETE',
        headersWithToken,
        false
    )
}

export default  deletePortfolioFetch;
