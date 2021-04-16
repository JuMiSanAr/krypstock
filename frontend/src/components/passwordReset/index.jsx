import React, {useState} from 'react'
import logo from '../../assets/logo/logo_with_name.png'
import {Link} from 'react-router-dom'
import {resetCodeFetch, signupCodeFetch} from "../../store/fetches/signup_fetches";
import history from "../../history";
import { HeaderWrapper, LoginWrapper, InputWrapper, ButtonWrapper,  MainContainerSI,} from '../../styles/components/signInStyles';
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

        <HeaderWrapper>
        </HeaderWrapper>
        <LoginWrapper> 
             <img src={logo} out="logo" alt="logo"/>
             <MainContainerSI>
               <h4>Enter your email address</h4>
               <InputWrapper>
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
                   <ButtonWrapper>
                   <button onClick={sendEmail}>Reset your password</button>
                   </ButtonWrapper>
               </InputWrapper>    
        </MainContainerSI>
        </LoginWrapper> 
        </>
    )
}

export default PasswordReset;