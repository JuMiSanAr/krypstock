import React, {useState} from 'react'
import {MainContainer, WrapDiv} from '../../styles/components/signUpStyles'
import logo from '../../assets/logo/logo_with_name.png'
import {Link} from 'react-router-dom'
import {resetCodeFetch, signupCodeFetch} from "../../store/fetches/signup_fetches";
import history from "../../history";
import {WrapDivR} from "../../styles/components/registrationStyles";
const PasswordReset = () => {

    const [ email, setEmail ] = useState('');
    const [ errorEmptyEmail, setErrorEmptyEmail ] = useState(false);

    const sendEmail = () => {

        if (email !== ''){
            resetCodeFetch(email)
            .then(data => {
                history.push("/password-verification/");
            })
            .catch((response) => {
                const statusLastChar = response.toString().slice(-1);
                if (statusLastChar === '0') {
                }
                else {
                    history.push("/password-verification/");
                }
            });
        }
        else {
            setErrorEmptyEmail(true);
        }
    }

    return (
        <>
        <MainContainer>
            <div>
                    <WrapDiv>
                        <img src={logo} out="logo" alt="logo"/>
                    </WrapDiv>
                    <WrapDivR>
                        <h4>Enter your email address</h4>
                    </WrapDivR>
                    <WrapDivR>
                         <input
                        required
                        onChange={event => setEmail(event.target.value)}
                        name='email'
                        type='text'
                        placeholder='E-Mail address'
                        onKeyUp={ event => event.key === 'Enter' ? sendEmail() : ''}
                        />
                        {errorEmptyEmail ?
                            <h1>Email field cannot be empty</h1>
                            : ''}
                    </WrapDivR>
                    <WrapDivR>
                         <button onClick={sendEmail}>Reset your password</button>
                    </WrapDivR>
                </div>
        </MainContainer>
        </>
    )
}

export default PasswordReset;