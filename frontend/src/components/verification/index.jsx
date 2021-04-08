import React from 'react'
import {MainContainerV, WrapDivV} from '../../styles/components/verificationStyles'
import logo from "../../assets/logo/logo_with_name.png";
import {Link} from 'react-router-dom'

const Verification = () => {

    return (
        <>
            <MainContainerV>
                <div>
                <WrapDivV>
                    <h3>Set your password and username</h3>
                </WrapDivV>
                <WrapDivV>
                    <img src={logo} out="logo" alt="logo"/>
                </WrapDivV>
                <WrapDivV>
                    <input name='verification_code' type='text' placeholder='Verification Code' required/>
                </WrapDivV>
                <WrapDivV>
                    <input name='username' type='text' placeholder='Username' required/>
                </WrapDivV>
                <WrapDivV>
                    <input name='password' type='text' placeholder='Password' required/>
                </WrapDivV>
                <WrapDivV>
                    <input name='r_password' type='text' placeholder='Repeat Password' required/>
                </WrapDivV>
                <WrapDivV>
                    <button><Link to="/sign-in">Continue</Link></button>
                </WrapDivV>
                </div>
            </MainContainerV>
        </>
    )
}

export default Verification;