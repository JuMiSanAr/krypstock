import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { portfoliossAction } from '../../../store/actions/portfoliosAction';
import portfoliosFetch from '../../../store/fetches/portfoliosFetches';
import { FormSelectWrapper } from '../../../styles/components/cryptoStyles/bitCoinStyles';
import { ButtonWrapper, SelectorWrapper, TransacWrapper } from '../../../styles/components/cryptoStyles/quickTradeStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import { postNewTransactionFetch } from '../../../store/fetches/transactionFetches'; 

const QuickTrade = () => {

    const dispatch = useDispatch()
    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)
    // console.log('allPortfoliosArray', allPortfoliosArray)

    const [buySell, setBuySell] = useState("B");
    const [portfolioID, setPortfolioID] = useState();
    const [company, setCompany] = useState("");
    const [volume, setVolume] = useState();
    const [pricePerShare, setPricePerShare] = useState();
    const type = "S";

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(buySell, portfolioID, company, volume, pricePerShare,type)
        postNewTransactionFetch(buySell, portfolioID, company, volume, pricePerShare, type)
        .then(data => {
            console.log('in submitHandler', data)
        })
    }

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
                                <option value="B">Buy</option>
                                <option value="S">Sell</option>
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
                                    <option value="choose-portfolio" disabled>Choose Portfolio</option>
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
                                <input type="number" placeholder="0" value={volume} onChange={e => setVolume(e.target.value)} required/>
                            </div>
                            <div className="transacItem amountInput">
                                <p>Price per share</p>
                                <input type="number" placeholder="0" value={pricePerShare} onChange={e => setPricePerShare(e.target.value)} required />
                            </div>
                            <div className="transacItem">
                                <p>Total Price</p>
                                <span>{`${volume*pricePerShare ? volume*pricePerShare : 0 }  CHF`}</span>
                            </div>
                        </TransacWrapper> 
                        <ButtonWrapper>
                            <button type="submit" value="Submit">Submit</button>
                        </ButtonWrapper>
                    </>
                }
            </form>
        </ShrinkingComponentWrapper>
    )
}

export default QuickTrade
