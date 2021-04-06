import React from 'react'
import {MainContainerSI, WrapDivSI} from '../../styles/components/signInStyles'
import logo from "../../assets/logo/logo_with_name.png";
import {Link} from 'react-router-dom'

const SignIn = () => {

    return (
        <>
                <MainContainerSI>
                    <WrapDivSI>
                    <img src={logo} out="logo"/>
                    </WrapDivSI>
                    <WrapDivSI>
                        <div>
                                <div>
                                    <WrapDivSI>
                                        <input name='username' type='text' placeholder='Username' required/>
                                    </WrapDivSI>
                                        <input name='password' type='text' placeholder='Password' required/>
                                </div>
                            <WrapDivSI>
                            <div>
                            <input type="checkbox" id="remember_me"/>
                            <label htmlFor="remember_me">Remember Me</label>
                            <p>Forgot your password?</p>
                            <button><Link to="/sign-up">SignIn</Link></button>
                            </div>
                            </WrapDivSI>
                        </div>
                    </WrapDivSI>
                </MainContainerSI>
        </>
    )
}

export default SignIn;