import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { FormSelectWrapper } from '../../../styles/components/cryptoStyles/bitCoinStyles';
import { ButtonWrapper, SelectorWrapper, TransacWrapper } from '../../../styles/components/cryptoStyles/quickTradeStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import { postNewTransactionFetch } from '../../../store/fetches/transactionFetches'; 
import { Link } from 'react-router-dom';
import SymbolFetch from '../../../store/fetches/symbolFetches';
import {iexSandboxKey} from '../../../store/constants'
import { ErrorSpan } from '../../../styles/globalParts/textStyles';

const StockQuickTrade = (props) => {

    const dispatch = useDispatch()
    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)
    // console.log('allPortfoliosArray', allPortfoliosArray)

    const [buySell, setBuySell] = useState("B");
    const [portfolioID, setPortfolioID] = useState();
    const [symbol, setSymbol] = useState();
    const [volume, setVolume] = useState();
    const [pricePerShare, setPricePerShare] = useState();
    const type = "S";
    const [allSymbols, setAllSymbols] = useState([]);
    const [incorrectSymbol, setIncorrectSymbol] = useState(false);
    const [notEnoughStocks, setNotEnoughStocks] = useState(false);
    const [marketPrice, setMarketPrice] = useState(0);

    const submitHandler = (e) => {
        if(allSymbols.includes(symbol)) {
            e.preventDefault();
            console.log(buySell, portfolioID, symbol, volume, pricePerShare,type)
            postNewTransactionFetch(buySell, portfolioID, symbol, volume, pricePerShare, type)
            .then(data => {
                console.log('in stock quicktrade submitHandler', data)
            })
            .catch(error => {
                // console.log(error.split('')[error.length-1])
                if (error.toString().slice(-1) === '3') {
                    console.log('error', error)
                    console.log("You don't have enough coins to sell")
                    setNotEnoughStocks(true);
                }
            })
            setIncorrectSymbol(false)
        } else {
            e.preventDefault();
            setIncorrectSymbol(true)
        }
    }

    useEffect( () => {  //get all stock symbols
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
    
    useEffect( () => {   // get price of specific symbol
        console.log('symbol',symbol)
        if (allSymbols.includes(symbol)) {
            fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/price?token=${iexSandboxKey}`)
            .then(res => res.json())
            .then(data => {
                console.log("useState ~ data", data)
                setMarketPrice(data)
            })
            .catch( error => {console.log('error', error)})
        } else {
            setMarketPrice(0)
        }
    }, [symbol, buySell])
    
    useEffect( () => {
        setNotEnoughStocks(false)
    }, [symbol, buySell, portfolioID, volume])

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
                            <select className="selector" defaultValue={""} onChange={e => setBuySell(e.target.value)} required>
                                <option value="" disabled>Select</option>
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
                            <div className="amountInput">
                                <label htmlFor="company-input">Portfolio</label>
                                <select className="selector" defaultValue={""} onChange={ e => setPortfolioID(e.target.value)} required>
                                    <option value="" disabled>Select portfolio</option>
                                    {
                                        allPortfoliosArray.map( (portfolio, index) => 
                                            <option key={index} value={portfolio.id}>{`${portfolio.name}`}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="amountInput">
                                <label htmlFor="company-input">Symbol</label>
                                <input 
                                    id="company-input" 
                                    list="stockSymbols" 
                                    name="company" 
                                    style={{"textTransform":"uppercase"}} 
                                    // value={symbol} 
                                    onChange={e => setSymbol(e.target.value.toUpperCase())} 
                                    required
                                />
                                <datalist id="stockSymbols">
                                    { allSymbols && allSymbols.length !== 0 ?
                                    allSymbols.map( (symbol, index) => 
                                    <option value={symbol} key={index} />
                                    )
                                    : null}
                                </datalist>
                            </div>
                            <div className="amountInput">
                                <p>Quantity</p>
                                <input 
                                    type="number" 
                                    step="1" 
                                    min="1"
                                    placeholder="1" 
                                    value={volume} 
                                    onChange={e => setVolume(e.target.value)} 
                                    required
                                />
                            </div>
                            <div className="amountInput">
                                <p>Price per share</p>
                                <input 
                                    type="number" 
                                    step="0.0001" 
                                    min="0.0001"
                                    placeholder={marketPrice} 
                                    value={pricePerShare} 
                                    onChange={e => setPricePerShare(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="transacItem">
                                <p>Market Price</p>
                                <span>{`${marketPrice}  USD`}</span>
                            </div>
                            <div className="transacItem">
                                <p>Total Price</p>
                                <span>{`${volume*pricePerShare ? parseFloat(volume*pricePerShare).toFixed(2) : '0.00' }  USD`}</span>
                            </div>
                        </TransacWrapper> 
                        {
                            incorrectSymbol ? <ErrorSpan><em>Symbol given is invalid</em></ErrorSpan> : ''
                        }
                        {
                            notEnoughStocks ? <ErrorSpan><em>Not enough stocks to sell at this amount</em></ErrorSpan> : ''
                        }
                        <ButtonWrapper>
                            <button type="submit" value="Submit">Submit</button>
                        </ButtonWrapper>
                    </>
                }
            </form>
        </ShrinkingComponentWrapper>
    )
}

export default StockQuickTrade
