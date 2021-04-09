import React, {useState} from 'react';
import { FormSelectWrapper } from '../../../styles/components/cryptoStyles/bitCoinStyles';
import { ButtonWrapper, SelectorWrapper, TransacWrapper } from '../../../styles/components/cryptoStyles/quickTradeStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';

const QuickTrade = () => {

    // const [] = useState(0)
    // const [] = useState(0)
    // const [] = useState(0)
    // const [] = useState(0)

    return(
        <ShrinkingComponentWrapper>
            <FormSelectWrapper>
                <div className="title">
                    <h3>Quick Trade</h3>
                </div>
                <SelectorWrapper>
                    <div className="buySell">
                        <select className="selector">
                            <option value="month">Buy</option>
                            <option value="week">Sell</option>
                        </select>
                    </div>
                </SelectorWrapper>
            </FormSelectWrapper>  
            <TransacWrapper>
                <div className="company transacItem amountInput">
                    <label htmlFor="company-input">Company</label>
                    <input id="company-input" type="text" name="company" placeholder="company" />
                </div>
                <div className="transacItem">
                    <p>Date of Investment</p>
                    <input type="date" /> 
                </div>
                <div className="transacItem amountInput">
                    <p>Volume</p>
                    <input type="number" placeholder="100"/>
                </div>
                <div className="transacItem">
                    <p>Price</p>
                    <span>11,400 CHF</span>
                </div>
                <div className="transacItem">
                    <p>Total Price</p>
                    <span>11,400 CHF</span>
                </div>
            </TransacWrapper> 
            <ButtonWrapper>
                <button type="submit">Submit</button>
            </ButtonWrapper>
        </ShrinkingComponentWrapper>
    )
}

export default QuickTrade



{/* <div className="transacItem amountInput">
    <p>Fee %</p>
    <div>
        <input placeholder="0.50"/>
        <span>%</span>
    </div>
</div> */}