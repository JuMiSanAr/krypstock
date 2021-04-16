import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import FooterNav from '../components/footerNav';
import { CryptoQuickTrade } from '../components/homeComponents/crypto/quickTrade';
import StockQuickTrade from '../components/homeComponents/stock/quickTrade';
import { AllComponentsWrapper, ShrinkingComponentWrapper } from '../styles/globalParts/containerStyles';
import portfoliosFetch from '../store/fetches/portfoliosFetches';
import { portfoliosAction } from '../store/actions/portfoliosAction';
import { CenterH2 } from '../styles/globalParts/textStyles';

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
            <CenterH2>Create New Transaction</CenterH2>
            <AllComponentsWrapper>
                <StockQuickTrade fromPage='AddRemovePage' />
                <CryptoQuickTrade fromPage='AddRemovePage' />
            </AllComponentsWrapper>
        </>
    )
}

export default AddRemovePage;