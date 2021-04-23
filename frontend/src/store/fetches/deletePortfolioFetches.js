import {fetchAPI} from "../fetchAPI";
import {headersWithToken} from "../constants";

const deletePortfolioFetch = (id) => {

    const token = localStorage.getItem('token');

    return fetchAPI(
        `portfolios/delete/${id}/`,
        {id:parseInt(id)},
        'DELETE',
        {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
},
        false
    )
}

export default  deletePortfolioFetch;
