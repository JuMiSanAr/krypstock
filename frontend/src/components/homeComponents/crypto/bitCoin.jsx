import React from 'react'
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import {FormSelectWrapper, GraphWrapper, RadioWrapper} from "../../../styles/components/cryptoStyles/bitCoinStyles";
import CandlestickStockHistorical from '../../charts/candlesticksStockHistorical'
import ChartTimeframeButton from "../../charts/chartSelectTimeframeButton";



export const BitCoin = () => {

    return (
        <>
         <ShrinkingComponentWrapper> 
           <FormSelectWrapper>
           <div className="title">
               <h3>BitCoin</h3>
            </div>
            <div >
                <ChartTimeframeButton/>
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
               <CandlestickStockHistorical/>
           </GraphWrapper>
                
        </ShrinkingComponentWrapper>
        </>
    )
}
