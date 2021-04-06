import React from 'react'
import {MainContainer, Color, WrapDiv} from '../../styles/components/signUpStyles'
import logo from '../../assets/logo/logo_with_name.png'
import {Link} from 'react-router-dom'
const SignUp = () => {

    return (
        <>
        <MainContainer>
                    <WrapDiv>
                    <img src={logo} out="logo"/>
                    </WrapDiv>
                    <WrapDiv>
                        <div>
                            <WrapDiv>
                                <button><Link to="/sign-in">SignIn</Link></button>
                            </WrapDiv>
                                 <button><Link to="/sign-up/registration">Register</Link></button>
                        </div>
                    </WrapDiv>

        </MainContainer>
        </>
    )
}

export default SignUp;