import React, {useState} from 'react'
import {InputWrapper, MainContainerR} from "../../styles/components/registrationStyles";
import {signupCodeFetch} from "../../store/fetches/signup_fetches";
import history from "../../history";
import logo from "../../assets/logo/logo_with_name.png";
// import {WrapDiv} from "../../styles/components/signUpStyles";
import {HeaderWrapper, LoginWrapper,  ButtonWrapper} from "../../styles/components/signInStyles";


const Registration = (props) => {

    const [ email, setEmail ] = useState('');
    const [ errorAlreadyActivated, setErrorAlreadyActivated ] = useState(false);
    const [ errorEmptyEmail, setErrorEmptyEmail ] = useState(false);

    const sendEmail = () => {

        if (email !== ''){
            signupCodeFetch(email)
            .then(data => {
                history.push("/sign-up/congratulation");
            })
            .catch((response) => {
                const statusLastChar = response.toString().slice(-1);
                if (statusLastChar === '0') {
                    setErrorAlreadyActivated(true);
                }
                else {
                    history.push("/sign-up/congratulation");
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
               <MainContainerR> 
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
                        {errorAlreadyActivated ?
                            <>
                            <h1>It looks like there's an existing account that uses this email</h1>
                            <h1>Please log in using your email and password instead</h1>
                            </>
                            : ''}
                         <ButtonWrapper>
                         <button onClick={sendEmail}>Register</button>
                        </ButtonWrapper>
                      
               </InputWrapper>
            </MainContainerR> 
            </LoginWrapper>

            {/* <MainContainerR>
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
                        {errorAlreadyActivated ?
                            <>
                            <h1>It looks like there's an existing account that uses this email</h1>
                            <h1>Please log in using your email and password instead</h1>
                            </>
                            : ''}
                    </WrapDivR>
                    <WrapDivR>
                         <button onClick={sendEmail}>Register</button>
                    </WrapDivR>
                </div>
            </MainContainerR> */}
        </>
    )
}

export default Registration;
