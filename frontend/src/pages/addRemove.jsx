import React, {useEffect,  useState} from 'react';
import {useDispatch} from 'react-redux';
import { CryptoQuickTrade } from '../components/homeComponents/crypto/quickTrade';
import StockQuickTrade from '../components/homeComponents/stock/quickTrade';
import { AllComponentsWrapper } from '../styles/globalParts/containerStyles';
import portfoliosFetch from '../store/fetches/portfoliosFetches';
import { portfoliosAction } from '../store/actions/portfoliosAction';
// import { CenterH2 } from '../styles/globalParts/textStyles';
import { NaviWrapper } from '../styles/components/naviStyles/menuStyles';
import Burger from '../components/navi/burger';
import Menu from '../components/navi/menu';

const AddRemovePage = () => {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const token = localStorage.getItem('token');
    
    useEffect( () => {
        if (token) {
            portfoliosFetch()
            .then(data => {
                dispatch(portfoliosAction(data))
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return (
        <>
            <NaviWrapper>
                <div>
                    <Burger open={open} setOpen={setOpen}/> 
                    <Menu open={open} setOpen={setOpen} />  
                </div>  
                <div className="heading">
                    <h2>New transaction</h2>
                </div>
                </NaviWrapper>
            <AllComponentsWrapper>
                <StockQuickTrade fromPage='AddRemovePage' />
                <CryptoQuickTrade fromPage='AddRemovePage' />
            </AllComponentsWrapper>
        </>
    )
}

export default AddRemovePage;