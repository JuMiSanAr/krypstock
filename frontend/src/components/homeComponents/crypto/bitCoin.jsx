import React, {useState} from 'react'
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import {FormSelectWrapper, GraphWrapper, RadioWrapper} from "../../../styles/components/cryptoStyles/bitCoinStyles";
import CandlestickCryptoIntraday from "../../charts/candlesticksCryptoIntraday";
import ChartTimeCrypto from "../../charts/chartSelectTimeCrypto";
import CandlestickCryptoHistorical from "../../charts/candlesticksCryptoHistorical";



export const BitCoin = () => {

    const [chartTimeframe2, setChartTimeframe2] = useState('1d');

    const [intradayData, setIntradayData] = useState([]);
    const [historicalData, setHistoricalData] = useState([]);

    const symbol = ('btcusdt').toUpperCase();

    return (
        <>
         <ShrinkingComponentWrapper> 
           <FormSelectWrapper>
           <div className="title">
               <h3>BitCoin</h3>
            </div>
            <div >
                <ChartTimeCrypto setChart2={setChartTimeframe2}/>
            </div>
           </FormSelectWrapper>
           <RadioWrapper>
           <form>
                <label>BTC</label>
                <input type="radio" name="bitcoin" value="btc" />
                <label>ETH</label>
                <input type="radio" name="ethereum" value="eth" />
                <label htmlFor="other">LTC</label>
                <input type="radio" name="litecoin" value="ltc" />
                <label htmlFor="other">XMR</label>
                <input type="radio" name="monero" value="xmr" />
            </form>
           </RadioWrapper> 
           <GraphWrapper>
               {chartTimeframe2 === '1d'?
                   <CandlestickCryptoIntraday data={intradayData} symbol={symbol} timeLength={chartTimeframe2}/>
                   :
                   <CandlestickCryptoHistorical data={historicalData} symbol={symbol} timeLength={chartTimeframe2}/>}
           </GraphWrapper>
                
        </ShrinkingComponentWrapper>
        </>
    )
}
