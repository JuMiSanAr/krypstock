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
import PortfoliosWithStock from "../components/stockCards/portfoliosWithStock";

const StockPage = (props) => {

    const [chartTimeframe, setChartTimeframe] = useState('day');

    const [companyName, setCompanyName] = useState('');
    const [companyMarket, setCompanyMarket] = useState('');

    const [intradayData, setIntradayData] = useState([]);
    const [historicalData, setHistoricalData] = useState([]);

    const symbol = 'AAPL';

    useEffect(() => {
        stockFetcherIntraday(symbol, setIntradayData);
    }, []);

    useEffect(() => {
        if (chartTimeframe !== 'day') {
            stockFetcherHistorical(symbol, setHistoricalData, chartTimeframe);
        }
    }, [chartTimeframe]);

    return (
        <>
    <AllComponentsWrapper>
        <h1 className='stockCompanyTitle'>{companyName}</h1>
        <ShrinkingComponentWrapper>
            <StockPageInfoCard symbol={symbol} setCompanyName={setCompanyName} setCompanyMarket={setCompanyMarket}/>
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
                        <CandlestickStockIntraday data={intradayData} market={companyMarket}/>
                        :
                        ''
                }
                {
                    chartTimeframe === 'day' && intradayData === null ?
                        <NoIntradayInfo companyName={companyName} market={companyMarket}/>
                        :
                        ''
                }
                {
                    chartTimeframe !== 'day' ?
                        <CandlestickStockHistorical data={historicalData} market={companyMarket}/>
                        :
                        ''
                }
            </GraphWrapper>
        </ShrinkingComponentWrapper>
        <PortfoliosWithStock symbol={symbol}/>
        <NewsStock symbol={symbol} companyName={companyName}/>
    </AllComponentsWrapper>
        </>
    )
}

export default StockPage;