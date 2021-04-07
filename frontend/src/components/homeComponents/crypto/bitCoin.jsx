import React from 'react'
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import {FormSelectWrapper, GraphWrapper, RadioWrapper} from "../../../styles/components/cryptoStyles/bitCoinStyles";
import CandlestickStockHistorical from '../../charts/candlesticksStockHistorical';



export const BitCoin = () => {

    return (
        <>
         <ShrinkingComponentWrapper> 
           <FormSelectWrapper>
           <div className="title">
               <h3>BitCoin</h3>
            </div>
                <div >
                <select className="selector">
                <option value="month">Month</option>
                <option value="week">Week</option>
                <option value="day">Day</option>
                </select>
            </div>
           </FormSelectWrapper>
           <RadioWrapper>
           <form>
                <label>BTC</label>
                <input type="radio" name="bitcoin" value="btc" />
                <label>ETH</label>
                <input type="radio" name="ethereum" value="eth" />
                <label for="other">LTC</label>
                <input type="radio" name="litecoin" value="ltc" />
                <label for="other">XMR</label>
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
