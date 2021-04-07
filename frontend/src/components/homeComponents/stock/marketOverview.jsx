import React from 'react';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import Graph from '../../../assets/stock_graph.png'

const MarketOverview = () => {

    return (
        <ShrinkingComponentWrapper>
            <h3>Market Overview</h3>
            <img src={Graph} />
        </ShrinkingComponentWrapper>
    )
}

export default MarketOverview;