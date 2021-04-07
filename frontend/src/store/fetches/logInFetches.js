import {fetchAPI} from "../fetchAPI";
import {headers} from "../constants";


const loginFetch = (email, password) => {
    return fetchAPI(
        'auth/token/',
        {email: email, password: password},
        'POST',
        headers
    )
}

export default loginFetch;
