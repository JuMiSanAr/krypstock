import React, {useEffect, useState} from 'react';
import CandlestickCryptoIntraday from "../components/charts/candlesticksCryptoIntraday";
import {FormSelectWrapper, GraphWrapper} from "../styles/components/cryptoStyles/bitCoinStyles";
import {AllComponentsWrapper, ShrinkingComponentWrapper} from "../styles/globalParts/containerStyles";
import NewsCrypto from "../components/newsFeed/newsCrypto";
import CandlestickCryptoHistorical from "../components/charts/candlesticksCryptoHistorical";
import ChartTimeCrypto from "../components/charts/chartSelectTimeCrypto";

const CryptoPage = (props) => {

    const [chartTimeframe2, setChartTimeframe2] = useState('1d');

    const [intradayData, setIntradayData] = useState([]);
    const [historicalData, setHistoricalData] = useState([]);

    const url = window.location.href;
    const symbol = url.substring(url.lastIndexOf('/') + 1).toUpperCase();

    useEffect(() => {
    }, [chartTimeframe2])


    return (
        <>
            <AllComponentsWrapper>
                <h1>{symbol}</h1>
                <ShrinkingComponentWrapper>
                    <CryptoPageInfoCard symbol={symbol}/>
                </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                 <FormSelectWrapper>
                <div className="title">
                   <h3>Price Chart</h3>
                </div>
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
                {/*<NewsCrypto symbol={symbol}/>*/}
            </ShrinkingComponentWrapper>
        {/* <FooterNav/> */}
    </AllComponentsWrapper>
        </>
    )
}

export default CryptoPage;