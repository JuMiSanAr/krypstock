import React, { useState } from 'react'
// import {MainContainerV, WrapDivV} from '../../styles/components/verificationStyles'
import {activatePasswordAccountFetch} from "../../store/fetches/signup_fetches";
import history from "../../history";
// import {WrapDiv} from "../../styles/components/signUpStyles";

import { MainContainerV, InputWrapper, VerificationWrapper } from '../../styles/components/verificationStyles'
import { HeaderWrapper, ButtonWrapper, } from "../../styles/components/signInStyles";

const PasswordVerification = () => {

    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const [errorCode, setErrorCode] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorEmpty, setErrorEmpty] = useState(false);

    const activateAccount = () => {
        if ((email || code || password1 || password2) === '') {
            setErrorEmpty(true);
            return 0;
        }
        setErrorEmpty(false);

        const body = {
            email: email,
            code: code,
            password1: password1,
            password2: password2,
        }
        activatePasswordAccountFetch(body)
            .then(data => {
                history.push('/sign-in')
            })
            .catch(response => {
                const statusLastChar = response.toString().slice(-1);

                if (statusLastChar === '0') {
                    setErrorPassword(true);
                    setErrorCode(false);
                }
                else {
                    setErrorPassword(false);
                    setErrorCode(true);
                }
            })
    }

    return (
        <>
            <HeaderWrapper>
            </HeaderWrapper>
            <VerificationWrapper>
                {/* <img src={logo} out="logo" alt="logo"/> */}
                <MainContainerV>
                    <h4>Reset your password</h4>
                    <InputWrapper>
                        <input
                            required
                            onChange={event => setEmail(event.target.value)}
                            // value={}
                            name='email'
                            type='text'
                            placeholder='E-Mail address'
                        />

                        <input
                            required
                            onChange={event => setCode(event.target.value)}
                            // value={}
                            name='code'
                            type='text'
                            placeholder='Validation code'
                        />

                        <input
                            required
                            onChange={event => setPassword1(event.target.value)}
                            // value={}
                            name='password'
                            type='password'
                            placeholder='Password'
                        />

                        <input
                            required
                            onChange={event => setPassword2(event.target.value)}
                            // value={}
                            name='password repeat'
                            type='password'
                            placeholder='Password repeat'
                            onKeyUp={event => event.key === 'Enter' ? activateAccount() : ''}
                        />

                        {errorEmpty ?
                            <h1>Please make sure to fill in all fields</h1>
                            : ''}
                        {errorCode ?
                            <h1>Email and code don't match</h1>
                            : ''}
                        {errorPassword ?
                            <>
                                <h1>The two passwords introduced didn't match</h1>
                            </>
                            : ''}
                        <ButtonWrapper>
                            <button onClick={activateAccount}>Create a new password</button>
                        </ButtonWrapper>
                    </InputWrapper>
                </MainContainerV>
            </VerificationWrapper>
        </>
    )
}

export default PasswordVerification;