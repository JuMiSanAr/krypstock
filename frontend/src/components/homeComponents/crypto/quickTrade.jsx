import React, {useState, useEffect} from 'react';
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

    const [allSymbols, setAllSymbols] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(buySell, portfolioID, symbol, amount, pricePerCoin,type)
        postNewTransactionFetch(buySell, portfolioID, symbol, amount, pricePerCoin, type)
        .then(data => {
            console.log('in crypto quicktrade submitHandler', data)
        })
    }

    useEffect( () => {

        let symbolsSet = new Set(); 

        fetch("https://api.binance.com/api/v3/exchangeInfo")
        .then(res => res.json())
        .then(data => {
            // console.log('crypto data.symbols', data.symbols)
            const nonDuplicatedSymbols = data.symbols.filter( crypto => crypto['quoteAsset'] === 'USDT');
            for (const crypto of data.symbols) {
                symbolsSet.add(crypto.baseAsset)
            }
            symbolsSet = Array.from(symbolsSet)  //convert set to array 
            // console.log('symbolsSet', symbolsSet)
            setAllSymbols(symbolsSet);
        })
    }, []);
    
    useEffect( () => {
        // console.log('allSymbols', allSymbols)
    }, [allSymbols])

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
                        <div className="currSelect transacItem amountInput">
                            <label htmlFor="company-input">Cryptocurrency</label>
                            <input id="company-input" className="selector" list="crypto-symbols" onChange={e => setSymbol(e.target.value)} required/>
                            <datalist id="crypto-symbols" >
                                { allSymbols && allSymbols.length !== 0 ?
                                    allSymbols.map( (symbol, index) => 
                                    <option value={symbol} key={index} />)
                                    : null
                                }
                            </datalist>
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
                                <span>{`${amount*pricePerCoin ? parseFloat(amount*pricePerCoin).toFixed(2) : '0.00'}  USD`}</span>
                        </div>
                    </TransacWrapper> 
                    <ButtonWrapper>
                        <button type="submit" value="Submit" disabled={!(allSymbols.includes(symbol))}>Submit</button>
                    </ButtonWrapper>
                </>
                }
            </form>
        </ShrinkingComponentWrapper>
    )
}
