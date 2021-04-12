// import Button from '../styles/components/buttonStyles';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import portfoliosFetch from '../store/fetches/portfoliosFetches';
import {portfoliosAction} from '../store/actions/portfoliosAction';
import {Crypto }from '../components/homeComponents/crypto/index';
import FooterNav from '../components/footerNav';
import Stock from '../components/homeComponents/stock/index.jsx';
import { useState } from "react";
import {DoubleButtonContainer, LeftButton, RightButton, MainContentWrapper} from "../styles/pages/homeStyles"
import { loginUserDataFetch } from '../store/fetches/loginUserDataFetches';
import { loginUserAction } from '../store/actions/loginUserAction';


const Home = () => {

    const dispatch = useDispatch();

    const token = localStorage.getItem('token');

    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
      };

    useEffect( () => {
        if (token) {
            portfoliosFetch()
            .then(data => {
                dispatch(portfoliosAction(data.results))
            })
        }
    }, [token]);

    useEffect(() => {
        loginUserDataFetch()
        .then(data => {
            console.log("from user data",data)
            dispatch(loginUserAction(data))
        })

    }, [])

    return (
        <>
            <DoubleButtonContainer>
                <LeftButton onClick={() => toggleTab(1)} numberClicked={toggleState}>Stock</LeftButton>
                <RightButton onClick={() => toggleTab(2)} numberClicked={toggleState}>Crypto</RightButton>
            </DoubleButtonContainer>
            <MainContentWrapper>
                <div className={toggleState === 1 ? "active-content" : "content"}>
                    <Stock />
                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}>
                    <Crypto />
                </div>
            </MainContentWrapper>
            {/* <FooterNav/> */}
        </>
    )
}

export default Home;