import React from 'react'
import {MainContainerR, WrapDivR} from "../../styles/components/registrationStyles";
import {Link} from 'react-router-dom'
const Registration = () => {

    return (
        <>
            <MainContainerR>
                <div>
                    <WrapDivR>
                    <h4>Enter your email address</h4>
                    </WrapDivR>
                    <WrapDivR>
                        <input name='email' type='text' placeholder='E-Mail address' required/>
                    </WrapDivR>
                    <WrapDivR>
                        <button><Link to="/sign-up/congratulation">Register</Link></button>
                    </WrapDivR>
                </div>
            </MainContainerR>
        </>
    )
}

export default Registration;
