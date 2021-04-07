import React from 'react';
import {AllComponentsWrapper} from '../../../styles/globalParts/containerStyles';
import MarketOverview from './marketOverview.jsx';
import News from './news';
import TransactionHistory from './transactionHistory';

const Stock = () => {

    return (
        <AllComponentsWrapper>
            <MarketOverview/>
            <News/>
            <TransactionHistory/>
        </AllComponentsWrapper>
    )

}

export default Stock