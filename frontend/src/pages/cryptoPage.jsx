import React, {useEffect, useState} from 'react';
import FooterNav from '../components/footerNav';
import CandlestickCryptoIntraday from "../components/charts/candlesticksCryptoIntraday";
import {FormSelectWrapper, GraphWrapper} from "../styles/components/cryptoStyles/bitCoinStyles";
import {AllComponentsWrapper, ShrinkingComponentWrapper} from "../styles/globalParts/containerStyles";
import StockPageInfoCard from "../components/stockCards/stockPageInfoCard";
import ChartTimeframeButton from "../components/charts/chartSelectTimeframeButton";
import NewsCrypto from "../components/newsFeed/newsCrypto";
import {cryptoFetcherIntraday} from "../components/charts/helperFunctions/cryptoFetcherIntraday";
import {cryptoFetcherHistorical} from "../components/charts/helperFunctions/cryptoFetcherHistorical";
import CandlestickCryptoHistorical from "../components/charts/candlesticksCryptoHistorical";
import CryptoPageInfoCard from "../components/cryptoCards/cryptoPageInfoCard";

const CryptoPage = (props) => {

    const [chartTimeframe, setChartTimeframe] = useState('day');

    const [intradayData, setIntradayData] = useState([]);
    const [historicalData, setHistoricalData] = useState([]);

    const symbol = 'BTCUSD';

    useEffect(() => {
        cryptoFetcherIntraday(symbol, setIntradayData);
        cryptoFetcherHistorical(symbol, setHistoricalData, chartTimeframe);
    }, []);

    useEffect(() => {
        cryptoFetcherHistorical(symbol, setHistoricalData, chartTimeframe);
    }, [chartTimeframe])


    return (
        <>
            <AllComponentsWrapper>
                <h1>{symbol}</h1>
                <ShrinkingComponentWrapper>
                    <CryptoPageInfoCard data={symbol}/>
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
                   <CandlestickCryptoIntraday data={intradayData}/>
                   :
                   <CandlestickCryptoHistorical data={historicalData}/>}
            </GraphWrapper>
        </ShrinkingComponentWrapper>
        <NewsCrypto symbol={symbol}/>
        <FooterNav/>
    </AllComponentsWrapper>
        </>
    )
}

export default CryptoPage;