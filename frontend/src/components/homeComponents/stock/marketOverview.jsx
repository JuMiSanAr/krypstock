import React, {useEffect, useState} from 'react';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import { TitleSpan } from '../../../styles/globalParts/textStyles';
import {iexSandboxKey} from "../../../store/constants";
import StockMarketOvewviewChart from "../../charts/stockMarketOverview";
// import Graph from '../../../assets/stock_graph.png'

const MarketOverview = () => {

    const [sectorData, setSectorData] = useState([]);

    const [render, setRender] = useState(false);

    useEffect (() => {
        fetch(`https://sandbox.iexapis.com/stable/stock/market/sector-performance?token=${iexSandboxKey}`)
            .then(res => res.json())
            .then(data => {
                setSectorData(data);
            })
    }, []);

    useEffect(() => {
        if (sectorData) {
            setRender(true);
        }
    }, [sectorData]);

    return (
        <ShrinkingComponentWrapper>
            <TitleSpan>Market Overview</TitleSpan>
            {setRender ? <StockMarketOvewviewChart data={sectorData}/> : ''}
        </ShrinkingComponentWrapper>
    )
}

export default MarketOverview;