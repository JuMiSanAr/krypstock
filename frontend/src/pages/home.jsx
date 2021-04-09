// import Button from '../styles/components/buttonStyles';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import portfoliosFetch from '../store/fetches/portfoliosFetches';
import {portfoliosAction} from '../store/actions/portfoliosAction';
import {Crypto }from '../components/homeComponents/crypto/index';
import FooterNav from '../components/footerNav';
import Stock from '../components/homeComponents/stock/index.jsx';
import { useState } from "react";
import {DoubleButtonContainer, LeftButton, RightButton, MainContentWrapper} from "../styles/pages/homeStyles"

const Home = () => {

    const dispatch = useDispatch();

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
      };

    useEffect( () => {
        portfoliosFetch()
        .then(data => {
            // console.log('in quick trade useEffect portfolios data.results', data.results)
            dispatch(portfoliosAction(data.results))
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
            <FooterNav/>
        </>
    )
}

export default Home;