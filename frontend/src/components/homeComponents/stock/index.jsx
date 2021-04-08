import React from 'react';
import {AllComponentsWrapper} from '../../../styles/globalParts/containerStyles';
import MarketOverview from './marketOverview.jsx';
import News from './news';
import QuickTrade from './quickTrade';
import TopPerformingStocks from './topPerforming';
import TransactionHistory from './transactionHistory';
import TrendyStocks from './trendyStocks';

const Stock = (props) => {

    return (
        <AllComponentsWrapper>
            <MarketOverview/>
            <News/>
            <QuickTrade/>
            <TransactionHistory />
            <TrendyStocks/>
            <TopPerformingStocks/>
        </AllComponentsWrapper>
    )

}

export default Stock