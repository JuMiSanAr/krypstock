import React, { useState, useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../store/actions/loginActions';
import {useHistory} from 'react-router-dom';
import {MainContainerSI, WrapDivSI} from "../styles/components/signInStyles";
import logo from "../assets/logo/logo_with_name.png";
import loginFetch from "../store/fetches/logInFetches";
import {Link} from "react-router-dom";


const LoginPage = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [errorMessage, setErrorMessage] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory()

    const loginHandler = () => {
        loginFetch(email, password)
            .then(data => {
            localStorage.setItem('token', data.access);
            const action = loginAction(data.access, true);
            dispatch(action);
            history.push('/');
        })
        .catch(() => {
                setErrorMessage(true);
            })
    }



    return (
        <>

               <MainContainerSI>
                    <WrapDivSI>
                    <img src={logo} out="logo" alt="logo"/>
                    </WrapDivSI>
                    <WrapDivSI id="sign-in-form">
                        <div>
                                <div>
                                    <WrapDivSI>
                                        <input
                                            required
                                            onChange={event => setEmail(event.target.value)}
                                            value={email}
                                            name='username'
                                            type='text'
                                            placeholder='Email'
                                        />
                                    </WrapDivSI>
                                    <WrapDivSI>
                                       <input
                                            required
                                            onChange={event => setPassword(event.target.value)}
                                            value={password}
                                            name='password'
                                            type='password'
                                            placeholder='Password'
                                            onKeyUp={ event => event.key === 'Enter' ? loginHandler() : ''}
                                        />
                                    </WrapDivSI>
                                </div>
                            <WrapDivSI>
                                <div>
                                    <button><Link to="/sign-up/registration">Registration</Link></button>
                                        <h1>{errorMessage ? 'Invalid username or password' : ''}</h1>
                                    <button onClick={loginHandler}>Login</button>
                                    <p>Forgot your password?</p>
                                </div>
                            </WrapDivSI>
                        </div>
                    </WrapDivSI>
                </MainContainerSI>













        </>
    )
}

export default LoginPage;
