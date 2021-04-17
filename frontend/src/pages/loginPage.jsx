import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../store/actions/loginActions';
import { useHistory } from 'react-router-dom';
import logo from "../assets/logo/logo_with_name.png";
import loginFetch from "../store/fetches/logInFetches";
import { Link } from "react-router-dom";
import { HeaderWrapper, LoginWrapper, InputWrapper, ButtonWrapper, MainContainerSI } from "../styles/components/signInStyles";


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState(false);

    const token = useSelector(state => state.logInReducer.token);

    const dispatch = useDispatch();
    const history = useHistory()

    const loginHandler = () => {
        loginFetch(email, password)
            .then(data => {
                localStorage.setItem('token', data.access);
                const action = loginAction(data.access, true);
                dispatch(action);

            })
            .catch(() => {
                setErrorMessage(true);
            })
    }

    useEffect(() => {
        if (token) {
            history.push('/');
        }
    }, [token]);



    return (
        <>
            <HeaderWrapper>
            </HeaderWrapper>
            <LoginWrapper>
                <img src={logo} out="logo" alt="logo" />
                <MainContainerSI>
                    <InputWrapper>
                        <input
                            required
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                            name='username'
                            type='text'
                            placeholder='Email'
                        />
                        <input
                            required
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                            name='password'
                            type='password'
                            placeholder='Password'
                            onKeyUp={event => event.key === 'Enter' ? loginHandler() : ''}
                        />
                    </InputWrapper>
                    <ButtonWrapper>
                    <span className="errorMessage">{errorMessage ? 'Invalid username or password' : ''}</span>
                        <button onClick={loginHandler}>Login</button>
                        <button><Link className="link linkbutton" to="/sign-up/registration">Registration</Link></button>
                    </ButtonWrapper>
                    <Link className="link" to="/password-reset"><p>Forgot your password?</p></Link>

                </MainContainerSI>
            </LoginWrapper>

        </>
    )
}

export default LoginPage;
