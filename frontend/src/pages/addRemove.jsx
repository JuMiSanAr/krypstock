import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { CryptoQuickTrade } from '../components/homeComponents/crypto/quickTrade';
import StockQuickTrade from '../components/homeComponents/stock/quickTrade';
import { AllComponentsWrapper } from '../styles/globalParts/containerStyles';
import portfoliosFetch from '../store/fetches/portfoliosFetches';
import { portfoliosAction } from '../store/actions/portfoliosAction';
import { CenterH2 } from '../styles/globalParts/textStyles';
import {PageTitleStyle} from "../styles/globalParts/titleStyles";

const AddRemovePage = () => {

    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    
    useEffect( () => {
        if (token) {
            portfoliosFetch()
            .then(data => {
                dispatch(portfoliosAction(data))
            })
        }
    }, [token]);

    return (
        <>
            <PageTitleStyle>New transaction</PageTitleStyle>
            <AllComponentsWrapper>
                <StockQuickTrade fromPage='AddRemovePage' />
                <CryptoQuickTrade fromPage='AddRemovePage' />
            </AllComponentsWrapper>
        </>
    )
}

export default AddRemovePage;