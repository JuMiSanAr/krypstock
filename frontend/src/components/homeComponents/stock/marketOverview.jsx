import React from 'react';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import { TitleSpan } from '../../../styles/globalParts/textStyles';
import CandlestickStockIntraday from '../../charts/candlesticksStockIntraday';
// import Graph from '../../../assets/stock_graph.png'

const MarketOverview = () => {

    return (
        <ShrinkingComponentWrapper>
            <TitleSpan>Intraday Overview</TitleSpan>
            {/* <img src={Graph} /> */}
            <CandlestickStockIntraday/>
        </ShrinkingComponentWrapper>
    )
}

export default MarketOverview;