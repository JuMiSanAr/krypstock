import React from 'react';
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import {FormSelectWrapper} from "../../../styles/components/cryptoStyles/bitCoinStyles";
import {SelectorWrapper, TransacWrapper, ButtonWrapper} from '../../../styles/components/cryptoStyles/quickTradeStyles'


export const QuickTrade = () => {
    return (
        <ShrinkingComponentWrapper> 
        <FormSelectWrapper>
        <div className="title">
            <h3>Quick trade</h3>
         </div>
         <SelectorWrapper>
             <div className="buySell">
             <select className="selector">
             <option value="month">Buy</option>
             <option value="week">Sell</option>
             </select>
             </div>
            <div className="currSelect">
            <select className="selector">
             <option value="month">BitCoin</option>
             <option value="week">Ethereum</option>
             <option value="day">LiteCoin</option>
             </select>
            </div>  
        </SelectorWrapper>
        </FormSelectWrapper>  
        <TransacWrapper>
            <div className="amountInput">
            <label>Quantity</label>
            <input type="text" name="bitcoin" placeholder="amount" />
            </div>
            <div className="transacItem">
                <p>Price</p>
                <span>11,400 CHF</span>
            </div>
            <div className="transacItem">
                <p>Price</p>
                <span>11,400 CHF</span>
            </div>
            <div className="transacItem">
                <p>Price</p>
                <span>11,400 CHF</span>
            </div>
            <div className="transacItem">
                <p>Price</p>
                <span>11,400 CHF</span>
            </div>
        </TransacWrapper> 
        <ButtonWrapper>
            <button type="submit">Submit</button>
        </ButtonWrapper>
       
     </ShrinkingComponentWrapper>
    )
}
