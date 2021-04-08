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
import NoIntradayInfo from "../components/charts/noIntradayInfo";

const StockPage = (props) => {

    const [chartTimeframe, setChartTimeframe] = useState('day');

    const [companyName, setCompanyName] = useState('');

    const [intradayData, setIntradayData] = useState([]);
    const [historicalData, setHistoricalData] = useState([]);

    const symbol = 'AAPL';
    const market = 'NASDAQ';

    useEffect(() => {
        stockFetcherIntraday(symbol, setIntradayData);
    }, []);

    useEffect(() => {
        if (chartTimeframe !== 'day') {
            stockFetcherHistorical(symbol, setHistoricalData, chartTimeframe);
        }
    }, [chartTimeframe])

    return (
        <>
    <AllComponentsWrapper>
        <h1>{companyName}</h1>
        <ShrinkingComponentWrapper>
            <StockPageInfoCard symbol={symbol} setCompanyName={setCompanyName}/>
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
                {
                    chartTimeframe === 'day' && intradayData ?
                        <CandlestickStockIntraday data={intradayData} market={market}/>
                        :
                        ''
                }
                {
                    chartTimeframe === 'day' && intradayData === null ?
                        <NoIntradayInfo symbol={symbol} market={market}/>
                        :
                        ''
                }
                {
                    chartTimeframe !== 'day' ?
                        <CandlestickStockHistorical data={historicalData} market={market}/>
                        :
                        ''
                }
            </GraphWrapper>
        </ShrinkingComponentWrapper>
        <NewsStock symbol={symbol} companyName={companyName}/>
        <FooterNav/>
    </AllComponentsWrapper>
        </>
    )
}

export default StockPage;