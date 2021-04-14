import React from 'react'
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import {FormSelectWrapper, GraphWrapper, RadioWrapper} from "../../../styles/components/cryptoStyles/bitCoinStyles";
import ChartTimeCryptoframeButton from "../../charts/chartSelectTimeCryptoframeButton";
import CandlestickCryptoIntraday from "../../charts/candlesticksCryptoIntraday";



export const BitCoin = () => {

    return (
        <>
         <ShrinkingComponentWrapper> 
           <FormSelectWrapper>
           <div className="title">
               <h3>BitCoin</h3>
            </div>
            <div >
                <ChartTimeCryptoframeButton/>
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
               <CandlestickCryptoIntraday/>
           </GraphWrapper>
                
        </ShrinkingComponentWrapper>
        </>
    )
}
