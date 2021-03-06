import React,{useState} from 'react'
import {MainContainerV, InputWrapper, VerificationWrapper} from '../../styles/components/verificationStyles'
import {activateAccountFetch} from "../../store/fetches/signup_fetches";
import history from "../../history";
import {HeaderWrapper, ButtonWrapper,} from "../../styles/components/signInStyles";

const Verification = () => {

    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const [ errorCode, setErrorCode ] = useState(false);
    const [ errorPassword, setErrorPassword ] = useState(false);
    const [ errorEmpty, setErrorEmpty] = useState(false);

    const activateAccount = () => {
        if ((email || code || username || password1 || password2) === '') {
            setErrorEmpty(true);
            return 0;
        }
        setErrorEmpty(false);

        const body = {
            email: email,
            code: code,
            username: username,
            password1: password1,
            password2: password2,
        }
        activateAccountFetch(body)
            .then(() => {
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
               <MainContainerV>  
               <h4>Set your password and username</h4>   
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
                        onChange={event => setUsername(event.target.value)}
                        // value={}
                        name='username'
                        type='text'
                        placeholder='Username'
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
                        onKeyUp={ event => event.key === 'Enter' ? activateAccount() : ''}
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
                        <button onClick={activateAccount}>Finish Registration</button>
                    </ButtonWrapper>
               </InputWrapper>
               </MainContainerV> 
            </VerificationWrapper>
        </>
    )
}

export default Verification;
