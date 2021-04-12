import React, {useEffect, useState} from 'react';
import FooterNav from '../components/footerNav';
import CandlestickCryptoIntraday from "../components/charts/candlesticksCryptoIntraday";
import {FormSelectWrapper, GraphWrapper} from "../styles/components/cryptoStyles/bitCoinStyles";
import {AllComponentsWrapper, ShrinkingComponentWrapper} from "../styles/globalParts/containerStyles";
import NewsCrypto from "../components/newsFeed/newsCrypto";
import {cryptoFetcherHistorical} from "../components/charts/helperFunctions/cryptoFetcherHistorical";
import CandlestickCryptoHistorical from "../components/charts/candlesticksCryptoHistorical";
import CryptoPageInfoCard from "../components/cryptoCards/cryptoPageInfoCard";
import ChartTimeCrypto from "../components/charts/chartSelectTimeCrypto";
import {cryptoFetcherIntraday} from "../components/charts/helperFunctions/cryptoFetcherIntraday";
import ChartTimeCryptoframeButton from "../components/charts/chartSelectTimeCryptoframeButton";
import CryptoList from "../components/charts/cryptoList";

const CryptoPage = (props) => {

    const [chartTimeframe, setChartTimeframe] = useState('1m');
    const [chartTimeframe2, setChartTimeframe2] = useState('1d');

    const [intradayData, setIntradayData] = useState([]);
    const [historicalData, setHistoricalData] = useState([]);

    const symbol = ('btcusdt').toUpperCase();

    // useEffect(() => {
    //  WebSocket.close();
    // }, []);

    // useEffect(() => {
    //     // cryptoFetcherHistorical(symbol, setHistoricalData, chartTimeframe);
    // }, [chartTimeframe])

    useEffect(() => {
        // cryptoFetcherHistorical(symbol, setHistoricalData, chartTimeframe);
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
                <div >Ticker
                    <ChartTimeCryptoframeButton setChart={setChartTimeframe}/>
                </div>
                <div >Time
                    <ChartTimeCrypto setChart2={setChartTimeframe2}/>
                </div>
              </FormSelectWrapper>
                 <GraphWrapper>
               {chartTimeframe === '1m'?
                   <CandlestickCryptoIntraday data={intradayData} symbol={symbol} time={chartTimeframe} timeLength={chartTimeframe2}/>
                   :
                   <CandlestickCryptoHistorical data={historicalData} symbol={symbol} time={chartTimeframe} timeLength={chartTimeframe2}/>}
            </GraphWrapper>
        </ShrinkingComponentWrapper>
        <NewsCrypto symbol={symbol}/>
        {/*<CryptoList/>*/}
        <FooterNav/>
    </AllComponentsWrapper>
        </>
    )
}

export default CryptoPage;