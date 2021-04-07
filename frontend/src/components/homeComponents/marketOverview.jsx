import React from 'react';
import { AllComponentsWrapper, ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import Graph from '../../assets/stock_graph.png'
const MarketOverview = () => {

    return (
        <>
            <AllComponentsWrapper>
                <ShrinkingComponentWrapper>
                    <h3>Market Overview</h3>
                    <img src={Graph} />
                </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                    <h3>Market Overview</h3>
                    <img src={Graph} />
                </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                    <h3>Market Overview</h3>
                    <img src={Graph} />
                </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                    <h3>Market Overview</h3>
                    <img src={Graph} />
                </ShrinkingComponentWrapper>
            </AllComponentsWrapper>
        </>
    )
}

export default MarketOverview;