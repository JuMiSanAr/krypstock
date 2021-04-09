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
    // console.log('allPortfoliosArray', allPortfoliosArray)

    const [buySell, setBuySell] = useState("buy");
    const [portfolioID, setPortfolioID] = useState(0);
    const [company, setCompany] = useState("");
    // const [] = useState(0)
    // const [] = useState(0)

    useEffect( () => {
        portfoliosFetch()
        .then(data => {
            // console.log('in quick trade useEffect portfolios data.results', data.results)
            dispatch(portfoliossAction(data.results))
        })
    }, [])

    const submitHandler = () => {

    }

    useEffect( () => {  
        console.log('buySell', buySell);
    }, [buySell])


    return(
        <ShrinkingComponentWrapper>
            <form onSubmit={submitHandler}>
                <FormSelectWrapper>
                    <div className="title">
                        <h3>Quick Trade</h3>
                    </div>
                    {
                    !allPortfoliosArray || allPortfoliosArray.length === 0 ?
                    null
                    :
                    <SelectorWrapper>
                        <div className="buySell">
                            <select className="selector" onChange={e => setBuySell(e.target.value)} required>
                                {/* <option value="Transaction" disabled>Choose Transaction</option> */}
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                            </select>
                        </div>
                    </SelectorWrapper>
                    }
                </FormSelectWrapper>  
                {
                    !allPortfoliosArray || allPortfoliosArray.length === 0 ?
                    <>
                        <span>You need a portfolio to trade</span>
                        <br/>
                        <span>Create your first portfolio</span>
                    </>
                    :
                    <>
                        <TransacWrapper>                    
                            <div className="transacItem amountInput">
                                <label htmlFor="company-input">Portfolio</label>
                                <select className="selector" onChange={ e => setPortfolioID(e.target.value)} required>
                                    <option disabled>Choose Portfolio</option>
                                    {
                                        allPortfoliosArray.map( (portfolio, index) => 
                                            <option key={'portfolio' + index} value={portfolio.id}>{`${portfolio.id}. ${portfolio.name}`}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="company transacItem amountInput">
                                <label htmlFor="company-input">Company</label>
                                <input id="company-input" type="text" name="company" placeholder="company" value={company} onChange={e => setCompany(e.target.value)} required/>
                            </div>
                            <div className="transacItem amountInput">
                                <p>Volume</p>
                                <input type="number" placeholder="100" required/>
                            </div>
                            <div className="transacItem amountInput">
                                <p>Price per share</p>
                                <input type="number" placeholder="200" required />
                            </div>
                            <div className="transacItem">
                                <p>Total Price</p>
                                <span>11,400 CHF</span>
                            </div>
                        </TransacWrapper> 
                        <ButtonWrapper>
                            <button type="submit">Submit</button>
                        </ButtonWrapper>
                    </>
                }
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