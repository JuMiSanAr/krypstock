import {fetchAPI} from "../fetchAPI";
import {headers} from "../constants";


export const signupCodeFetch = (email) => {
    return fetchAPI(
        'auth/registration/',
        {email: email},
        'POST',
        headers,
        false
    )
}

export const activateAccountFetch = (body) => {
        return fetchAPI(
        'auth/registration/validate/',
            {
            email: body.email,
            code: body.code,
            username: body.username,
            password1: body.password1,
            password2: body.password2,
            },
        'PATCH',
        headers
    )
}

export const resetCodeFetch = (email) => {
    return fetchAPI(
        'auth/password-reset/',
        {email: email},
        'PATCH',
        headers,
        false
    )
}

export const activatePasswordAccountFetch = (body) => {
        return fetchAPI(
        'auth/password-reset/validate/',
            {
            email: body.email,
            code: body.code,
            password1: body.password1,
            password2: body.password2,
            },
        'PATCH',
        headers,
       false
    )
}