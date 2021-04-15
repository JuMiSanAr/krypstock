import React from 'react'
// import {MainContainerC, WrapDivC} from "../../styles/components/congratulationStyles";
import history from "../../history";
import logo from "../../assets/logo/logo_with_name.png";
// import {WrapDiv} from "../../styles/components/signUpStyles";

import {MainContainerC, InputWrapper} from "../../styles/components/congratulationStyles";

import {ButtonWrapper, HeaderWrapper, LoginWrapper} from "../../styles/components/signInStyles";



const Congratulation = (props) => {

    const validateUser = () => {
        history.push("/sign-up/verification")
    }

    return (
        <>

        <HeaderWrapper>
            </HeaderWrapper>
             <LoginWrapper>
             <img src={logo} out="logo" alt="logo"/>
               <MainContainerC> 
               {/* <h4>Enter your email address</h4>     */}
               <h4>Check your email for the validation code</h4>
               <InputWrapper> 
                        <ButtonWrapper>
                        <button onClick={validateUser}>Validate your account</button>
                        </ButtonWrapper>
                        
            </InputWrapper>
            </MainContainerC> 
            </LoginWrapper>

            {/* <MainContainerC>
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
             </MainContainerC> */}
        </>
    )
}
export default Congratulation;
