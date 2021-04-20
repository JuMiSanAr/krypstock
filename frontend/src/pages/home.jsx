// import Button from '../styles/components/buttonStyles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import portfoliosFetch from '../store/fetches/portfoliosFetches';
import { portfoliosAction } from '../store/actions/portfoliosAction';
import { Crypto } from '../components/homeComponents/crypto/index';
import Stock from '../components/homeComponents/stock/index.jsx';
import { useState } from "react";
import { DoubleButtonContainer, LeftButton, RightButton, MainContentWrapper, AllContentWrapper } from "../styles/pages/homeStyles";
import { Redirect } from "react-router-dom"
import transactionFetch from '../store/fetches/transactionFetches';
import { transactionsAction } from '../store/actions/transactionsAction';
// import {PageTitleStyle} from "../styles/globalParts/titleStyles";
import { NaviWrapper } from '../styles/components/naviStyles/menuStyles';
import Burger from '../components/navi/burger';
import Menu from '../components/navi/menu';

const Home = () => {

    const dispatch = useDispatch();

    const token = useSelector(state => state.logInReducer.token);
    const [open, setOpen] = useState(false);
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    useEffect(() => {
        if (token) {
            portfoliosFetch()
                .then(data => {
                    dispatch(portfoliosAction(data))
                })

            transactionFetch()
                .then(data => {
                    // console.log("data.results", data.results);
                    const action = transactionsAction(data)
                    dispatch(action);
                })
        }
    }, [token]);

    return (
        <>
            {token ?
                <>
              
                <NaviWrapper>
                <div>
                    <Burger open={open} setOpen={setOpen}/> 
                    <Menu open={open} setOpen={setOpen} />  
                </div>  
                <div className="heading">
                <h2>Dashboard</h2>
                </div>
                </NaviWrapper>
                
                    <AllContentWrapper>
                        <DoubleButtonContainer>
                            <LeftButton className="left-button" onClick={() => toggleTab(1)} numberClicked={toggleState}>Crypto</LeftButton>
                            <RightButton className="right-button" onClick={() => toggleTab(2)} numberClicked={toggleState}>Stock</RightButton>
                            <div className="animation start-crypto"></div> 
                        </DoubleButtonContainer>
                        <MainContentWrapper>
                            <div className={toggleState === 1 ? "active-content" : "content"}>
                                <Crypto/>
                            </div>
                            <div className={toggleState === 2 ? "active-content" : "content"}>
                                <Stock/>
                            </div>
                        </MainContentWrapper>
                    </AllContentWrapper>
                </>
                :
                <Redirect to='/sign-in'/>
            }

        </>
    )
}

export default Home;