import React,{useState} from 'react'
import {MainContainerV, WrapDivV} from '../../styles/components/verificationStyles'
import logo from "../../assets/logo/logo_with_name.png";
import {activatePasswordAccountFetch} from "../../store/fetches/signup_fetches";
import history from "../../history";
import {WrapDiv} from "../../styles/components/signUpStyles";


const PasswordVerification = () => {

    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const [ errorCode, setErrorCode ] = useState(false);
    const [ errorPassword, setErrorPassword ] = useState(false);
    const [ errorEmpty, setErrorEmpty] = useState(false);

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
                console.log(data)
                history.push('/sign-in')
            })
            .catch(response => {
                console.log(response)
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
            <MainContainerV>
                <div>
                <WrapDiv>
                    <img src={logo} out="logo" alt="logo"/>
                </WrapDiv>
                <WrapDivV>
                    <h3>Reset your password</h3>
                </WrapDivV>
                <WrapDivV>
                    <input
                        required
                        onChange={event => setEmail(event.target.value)}
                        // value={}
                        name='email'
                        type='text'
                        placeholder='E-Mail address'
                    />
                </WrapDivV>
                <WrapDivV>
                    <input
                        required
                        onChange={event => setCode(event.target.value)}
                        // value={}
                        name='code'
                        type='text'
                        placeholder='Validation code'
                    />
                </WrapDivV>
                <WrapDivV>
                    <input
                        required
                        onChange={event => setPassword1(event.target.value)}
                        // value={}
                        name='password'
                        type='password'
                        placeholder='Password'
                    />
                </WrapDivV>
                <WrapDivV>
                    <input
                        required
                        onChange={event => setPassword2(event.target.value)}
                        // value={}
                        name='password repeat'
                        type='password'
                        placeholder='Password repeat'
                        onKeyUp={ event => event.key === 'Enter' ? activateAccount() : ''}
                    />
                </WrapDivV>
                <WrapDivV>
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
                <button onClick={activateAccount}>Create a new password</button>
                </WrapDivV>
                </div>
            </MainContainerV>
        </>
    )
}

export default PasswordVerification;