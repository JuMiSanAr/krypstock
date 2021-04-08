import React, {useEffect, useState} from 'react';
import FooterNav from '../components/footerNav';
import CandlestickStockIntraday from "../components/charts/candlesticksStockIntraday";
import CandlestickStockHistorical from "../components/charts/candlesticksStockHistorical";
import NewsStock from "../components/newsFeed/newsStock";
import {AllComponentsWrapper, ShrinkingComponentWrapper} from "../styles/globalParts/containerStyles";
import ChartTimeframeButton from "../components/charts/chartSelectTimeframeButton";
import { FormSelectWrapper, GraphWrapper } from "../styles/components/cryptoStyles/bitCoinStyles";
import StockPageInfoCard from "../components/stockCards/stockPageInfoCard";
import {stockFetcherIntraday} from "../components/charts/helperFunctions/stockFetcherIntraday";
import {stockFetcherHistorical} from "../components/charts/helperFunctions/stockFetcherHistorical";

const StockPage = (props) => {

    const [chartTimeframe, setChartTimeframe] = useState('day');

    const [intradayData, setIntradayData] = useState([]);
    const [historicalData, setHistoricalData] = useState([]);

    const symbol = 'AAPL';

    useEffect(() => {
        stockFetcherIntraday(symbol, setIntradayData);
        stockFetcherHistorical(symbol, setHistoricalData, chartTimeframe);
    }, []);

    useEffect(() => {
        stockFetcherHistorical(symbol, setHistoricalData, chartTimeframe);
    }, [chartTimeframe])

    return (
        <>
    <AllComponentsWrapper>
        <h1>{symbol}</h1>
        <ShrinkingComponentWrapper>
            <StockPageInfoCard data={symbol}/>
        </ShrinkingComponentWrapper>
        <ShrinkingComponentWrapper>
            <FormSelectWrapper>
                <div className="title">
                   <h3>Price Chart</h3>
                </div>
                <div >
                    <ChartTimeframeButton setChart={setChartTimeframe}/>
                </div>
            </FormSelectWrapper>
            <GraphWrapper>
               {chartTimeframe === 'day' ?
                   <CandlestickStockIntraday data={intradayData}/>
                   :
                   <CandlestickStockHistorical data={historicalData}/>}
            </GraphWrapper>
        </ShrinkingComponentWrapper>
        <NewsStock symbol={symbol}/>
        <FooterNav/>
    </AllComponentsWrapper>
        </>
    )
}

export default StockPage;