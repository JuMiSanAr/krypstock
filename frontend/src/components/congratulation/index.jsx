import React from 'react'
import {MainContainerC, WrapDivC} from "../../styles/components/congratulationStyles";
import history from "../../history";
import logo from "../../assets/logo/logo_with_name.png";
import {WrapDiv} from "../../styles/components/signUpStyles";

const Congratulation = (props) => {

    const validateUser = () => {
        history.push("/sign-up/verification")
    }

    return (
        <>
            <MainContainerC>
                <div>
                    <WrapDiv>
                    <img src={logo} out="logo" alt="logo"/>
                    </WrapDiv>
                    <WrapDivC>
                        <h4>Check your email for the validation code</h4>
                    </WrapDivC>
                    <WrapDivC>
                        <button onClick={validateUser}>Validate your account</button>
                    </WrapDivC>
                </div>
             </MainContainerC>
        </>
    )
}
export default Congratulation;
