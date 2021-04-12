import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { FormSelectWrapper } from '../../../styles/components/cryptoStyles/bitCoinStyles';
import { ButtonWrapper, SelectorWrapper, TransacWrapper } from '../../../styles/components/cryptoStyles/quickTradeStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import { postNewTransactionFetch } from '../../../store/fetches/transactionFetches'; 
import { Link } from 'react-router-dom';
import SymbolFetch from '../../../store/fetches/symbolFetches';

const StockQuickTrade = (props) => {

    const dispatch = useDispatch()
    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)
    // console.log('allPortfoliosArray', allPortfoliosArray)

    const [buySell, setBuySell] = useState();
    const [portfolioID, setPortfolioID] = useState();
    const [symbol, setSymbol] = useState();
    const [volume, setVolume] = useState();
    const [pricePerShare, setPricePerShare] = useState();
    const type = "S";

    const [allSymbols, setAllSymbols] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(buySell, portfolioID, symbol, volume, pricePerShare,type)
        postNewTransactionFetch(buySell, portfolioID, symbol, volume, pricePerShare, type)
        .then(data => {
            console.log('in stock quicktrade submitHandler', data)
        })
    }

    useEffect( () => {

        const symbolList = []

        fetch('https://sandbox.iexapis.com/beta/ref-data/symbols?token=Tpk_fec97062db224c2fb7b0b3836ab0e365')
            .then(res => res.json())
            .then(data => {
                // console.log('symbols data', data)
                for (const stock of data) {
                    symbolList.push(stock.symbol)
                }
                setAllSymbols(symbolList)
            })  
    }, [])
    
    return(
        <ShrinkingComponentWrapper>
            <form onSubmit={submitHandler}>
                <FormSelectWrapper>
                    <div className="title">
                        {props.fromPage === 'HomePage' ? <h3>Stock Quick Trade</h3> : <h3>Stock Trade</h3>}
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
                            <div className="company transacItem amountInput">
                                <label htmlFor="company-input">Company</label>
                                <input id="company-input" list="stock-symbols" name="company" placeholder="company" value={symbol} onChange={e => setSymbol(e.target.value)} required/>
                                <datalist id="stock-symbols">
                                    { allSymbols && allSymbols.length !== 0 ?
                                    allSymbols.map( (symbol, index) => 
                                    <option value={symbol} key={index} />
                                    )
                                    : null}
                                </datalist>
                            
                            </div>
                            <div className="transacItem amountInput">
                                <p>Quantity</p>
                                <input type="number" placeholder="0" value={volume} onChange={e => setVolume(e.target.value)} required/>
                            </div>
                            <div className="transacItem amountInput">
                                <p>Price per share</p>
                                <input type="number" placeholder="0" value={pricePerShare} onChange={e => setPricePerShare(e.target.value)} required />
                            </div>
                            <div className="transacItem">
                                <p>Total Price</p>
                                <span>{`${volume*pricePerShare ? parseFloat(volume*pricePerShare).toFixed(2) : '0.00' }  USD`}</span>
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

export default StockQuickTrade
