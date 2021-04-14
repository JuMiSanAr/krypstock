import React from 'react';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import CandlestickStockIntraday from '../../charts/candlesticksStockIntraday';
// import Graph from '../../../assets/stock_graph.png'

const MarketOverview = () => {

    return (
        <ShrinkingComponentWrapper>
            <h3>Intraday Overview</h3>
            {/* <img src={Graph} /> */}
            <CandlestickStockIntraday/>
        </ShrinkingComponentWrapper>
    )
}

export default MarketOverview;