import React, {useEffect, useState} from 'react';
import CandlestickCryptoIntraday from "../components/charts/candlesticksCryptoIntraday";
import { FormSelectWrapper, GraphWrapper } from "../styles/components/cryptoStyles/bitCoinStyles";
import { AllComponentsWrapper, ShrinkingComponentWrapper } from "../styles/globalParts/containerStyles";
import NewsCrypto from "../components/newsFeed/newsCrypto";
import CandlestickCryptoHistorical from "../components/charts/candlesticksCryptoHistorical";
import ChartTimeCrypto from "../components/charts/chartSelectTimeCrypto";
// import {PageTitleStyle} from "../styles/globalParts/titleStyles";
import { NaviWrapper } from '../styles/components/naviStyles/menuStyles';
import Burger from '../components/navi/burger';
import Menu from '../components/navi/menu';

const CryptoPage = (props) => {

    const [open, setOpen] = useState(false);

    const [chartTimeframe2, setChartTimeframe2] = useState('1d');

    const [intradayData, setIntradayData] = useState([]);
    const [historicalData, setHistoricalData] = useState([]);

    const url = window.location.href;
    const symbol = url.substring(url.lastIndexOf('/') + 1).toUpperCase();

    // const symbol = ('btcusdt').toUpperCase();

    // useEffect(() => {
    //  WebSocket.close();
    // }, []);

    // useEffect(() => {
    //     // cryptoFetcherHistorical(symbol, setHistoricalData, chartTimeframe);
    // }, [chartTimeframe])

    useEffect(() => {
        // cryptoFetcherHistorical(symbol, setHistoricalData, chartTimeframe);
    }, [chartTimeframe2])


    return (
        <>
            {/* <PageTitleStyle>{symbol}</PageTitleStyle> */}
            <NaviWrapper>
                <div>
                    <Burger open={open} setOpen={setOpen}/> 
                    <Menu open={open} setOpen={setOpen} />  
                </div>  
                <div className="heading">
                <h2>{symbol}</h2>
                </div>
                </NaviWrapper>
            <AllComponentsWrapper>
                <ShrinkingComponentWrapper>
                 <FormSelectWrapper>
                <div className="title">
                   <h3>Price Chart</h3>
                </div>
                {/*<div >Ticker*/}
                {/*    <ChartTimeCryptoframeButton setChart={setChartTimeframe}/>*/}
                {/*</div>*/}
                <div >Time
                    <ChartTimeCrypto setChart2={setChartTimeframe2}/>
                </div>
              </FormSelectWrapper>
                 <GraphWrapper>
                 {chartTimeframe2 === '1d'?
                   <CandlestickCryptoIntraday data={intradayData} symbol={symbol} timeLength={chartTimeframe2}/>
                   :
                   <CandlestickCryptoHistorical data={historicalData} symbol={symbol} timeLength={chartTimeframe2}/>}
                    </GraphWrapper>
                </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                    <NewsCrypto symbol={symbol} />
                </ShrinkingComponentWrapper>
                {/* <FooterNav/> */}
            </AllComponentsWrapper>
        </>
    )
}

export default CryptoPage;