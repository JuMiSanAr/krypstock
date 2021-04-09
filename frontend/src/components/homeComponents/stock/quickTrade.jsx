import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { portfoliossAction } from '../../../store/actions/portfoliosAction';
import portfoliosFetch from '../../../store/fetches/portfoliosFetches';
import { FormSelectWrapper } from '../../../styles/components/cryptoStyles/bitCoinStyles';
import { ButtonWrapper, SelectorWrapper, TransacWrapper } from '../../../styles/components/cryptoStyles/quickTradeStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';

const QuickTrade = () => {

    const dispatch = useDispatch()
    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)
    
    // const [] = useState(0)
    // const [] = useState(0)
    // const [] = useState(0)
    // const [] = useState(0)

    useEffect( () => {
        portfoliosFetch()
        .then(data => {
            console.log('in quick trade useEffect portfolios data.results', data.results)
            dispatch(portfoliossAction(data.results))
        })
    }, [])

    const submitHandler = () => {

    }

    return(
        <ShrinkingComponentWrapper>
            <form onSubmit={submitHandler}>
                <FormSelectWrapper>
                    <div className="title">
                        <h3>Quick Trade</h3>
                    </div>
                    <SelectorWrapper>
                        <div className="buySell">
                            <select className="selector" required>
                                <option value="Transaction">Choose Transaction</option>
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                            </select>
                        </div>
                    </SelectorWrapper>
                </FormSelectWrapper>  
                <TransacWrapper>                    
                    <div className="transacItem amountInput">
                        <label htmlFor="company-input">Portfolio</label>
                        <select className="selector" required>
                            <option></option>
                        </select>
                    </div>
                    <div className="company transacItem amountInput">
                        <label htmlFor="company-input">Company</label>
                        <input id="company-input" type="text" name="company" placeholder="company" required/>
                    </div>
                    <div className="transacItem amountInput">
                        <p>Volume</p>
                        <input type="number" placeholder="100" required/>
                    </div>
                    <div className="transacItem">
                        <p>Price per share</p>
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
            </form>
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

{/* <div className="transacItem">
    <p>Date of Investment</p>
    <input type="date" required/> 
</div> */}