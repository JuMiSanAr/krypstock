import React from 'react';
import {AllComponentsWrapper} from '../../../styles/globalParts/containerStyles';
import MarketOverview from './marketOverview.jsx';
import News from './news';
import QuickTrade from './quickTrade';
import TransactionHistory from './transactionHistory';
import TrendyStocks from './trendyStocks';

const Stock = () => {

    return (
        <AllComponentsWrapper>
            <MarketOverview/>
            <News/>
            <QuickTrade/>
            <TransactionHistory/>
            <TrendyStocks/>
        </AllComponentsWrapper>
    )

}

export default Stock