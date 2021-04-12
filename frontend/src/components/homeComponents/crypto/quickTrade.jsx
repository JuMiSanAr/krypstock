import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import {FormSelectWrapper} from "../../../styles/components/cryptoStyles/bitCoinStyles";
import {SelectorWrapper, TransacWrapper, ButtonWrapper} from '../../../styles/components/cryptoStyles/quickTradeStyles'
import { postNewTransactionFetch } from '../../../store/fetches/transactionFetches'; 
import { Link } from 'react-router-dom';

export const CryptoQuickTrade = (props) => {

    const dispatch = useDispatch()
    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)

    const [buySell, setBuySell] = useState();
    const [symbol, setSymbol] = useState();
    const [portfolioID, setPortfolioID] = useState();
    const [amount, setAmount] = useState();
    const [pricePerCoin, setPricePerCoin] = useState();
    const type = "C";

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(buySell, portfolioID, symbol, amount, pricePerCoin,type)
        postNewTransactionFetch(buySell, portfolioID, symbol, amount, pricePerCoin, type)
        .then(data => {
            console.log('in crypto quicktrade submitHandler', data)
        })
    }

    return (
        <ShrinkingComponentWrapper> 
            <form onSubmit={submitHandler}>
                <FormSelectWrapper>
                <div className="title">
                    {props.fromPage === 'HomePage' ? <h3>Crypto Quick Trade</h3> : <h3>Crypto Trade</h3>}
                </div>
                {
                !allPortfoliosArray || allPortfoliosArray.length === 0 ?
                null
                :
                <SelectorWrapper>
                    <div className="buySell">
                        <select className="selector" defaultValue={'DEFAULT'} onChange={e => setBuySell(e.target.value)} required>
                            <option value="DEFAULT" disabled>Select</option>
                            <option value="B">Buy</option>
                            <option value="S">Sell</option>
                        </select>
                    </div>
                    <div className="currSelect">
                        <select className="selector" defaultValue={'DEFAULT'} onChange={e => setSymbol(e.target.value)} required>
                            <option value="DEFAULT" disabled>Select</option>
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                            <option value="LTC">LTC</option>
                            <option value="XRP">XRP</option>
                            <option value="XLM">XLM</option>
                            <option value="DOT">DOT</option>
                            <option value="ADA">ADA</option>
                            <option value="BCH">BCH</option>
                            <option value="BNB">BNB</option>
                            <option value="UNI">UNI</option>
                            <option value="CEL">CEL</option>
                            <option value="EOS">EOS</option>
                            <option value="VET">VET</option>
                        </select>
                    </div>  
                </SelectorWrapper>
                }
                </FormSelectWrapper>  
                {
                !allPortfoliosArray || allPortfoliosArray.length === 0 ?
                <div className='empty'>
                    <span>You need a portfolio to trade</span>
                    <br/>
                    <Link to="/portfolio-list/">
                        <span className='create-portfolio'>Create your first portfolio</span>
                    </Link>
                </div>
                : 
                <>
                    <TransacWrapper>
                        <div className="transacItem amountInput">
                            <label htmlFor="company-input">Portfolio</label>
                            <select className="selector" defaultValue={'DEFAULT'} onChange={ e => setPortfolioID(e.target.value)} required>
                                <option value="DEFAULT" disabled>Select portfolio</option>
                                {
                                    allPortfoliosArray.map( (portfolio, index) => 
                                        <option key={index} value={portfolio.id}>{`${portfolio.name}`}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="transacItem amountInput">
                            <label>Amount</label>
                            <input type="text" name="amount" placeholder="amount" value={amount} onChange={e => setAmount(e.target.value)} required/>
                        </div>
                        <div className="transacItem amountInput">
                            <p>Price per Coin</p>
                            <input type="number" placeholder="0" value={pricePerCoin} onChange={e => setPricePerCoin(e.target.value)} required />
                        </div>
                        <div className="transacItem">
                                <p>Total Price</p>
                                <span>{`${amount*pricePerCoin ? amount*pricePerCoin : 0}  CHF`}</span>
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
