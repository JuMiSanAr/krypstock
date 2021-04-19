import React, {useEffect, useState} from 'react';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import { TitleSpan } from '../../../styles/globalParts/textStyles';
import CandlestickStockIntraday from '../../charts/candlesticksStockIntraday';
import {iexSandboxKey} from "../../../store/constants";
// import Graph from '../../../assets/stock_graph.png'

const MarketOverview = () => {

    const [sectorData, setSectorData] = useState([]);

    useEffect (() => {
        fetch(`https://sandbox.iexapis.com/stable/stock/market/sector-performance?token=${iexSandboxKey}`)
            .then(res => res.json())
            .then(data => {
                setSectorData(data);
            })
    }, []);



    return (
        <ShrinkingComponentWrapper>
            <TitleSpan>Intraday Overview</TitleSpan>
            {/* <img src={Graph} /> */}
            <CandlestickStockIntraday/>
        </ShrinkingComponentWrapper>
    )
}

export default MarketOverview;