import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { FormSelectWrapper } from '../../../styles/components/cryptoStyles/bitCoinStyles';
import { ButtonWrapper, BuySelectButton, BuySellSelectorWrapper, SellSelectButton, TransacWrapper } from '../../../styles/components/cryptoStyles/quickTradeStyles';
import { ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import { postNewTransactionFetch } from '../../../store/fetches/transactionFetches'; 
import { Link } from 'react-router-dom';
import {iexAPIKey, iexSandboxKey} from '../../../store/constants'
import { ErrorSpan, TitleSpan } from '../../../styles/globalParts/textStyles';
import { addTransactionAction } from '../../../store/actions/transactionsAction';

const StockQuickTrade = (props) => {

    const dispatch = useDispatch();
    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)

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
    const [transSuccess, setTransSucess] = useState(false);
    const [transUnSuccess , setTransUnSuccess ] = useState(false);

    const submitHandler = (e) => {
        if(allSymbols.includes(symbol)) {
            e.preventDefault();

            postNewTransactionFetch(buySell, portfolioID, symbol, volume, pricePerShare, type)
            .then(data => {
                setTransSucess(true)
                setTransUnSuccess(false)
                dispatch(addTransactionAction(data));
            })
            .catch(error => {
                setTransUnSuccess(true)
                if (error.toString().slice(-1) === '3') {  //if error is 403
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
        fetch(`https://cloud.iexapis.com/beta/ref-data/symbols?token=${iexAPIKey}`)
            .then(res => res.json())
            .then(data => {
                for (const stock of data) {
                    symbolList.push(stock.symbol)
                }
                setAllSymbols(symbolList)
            })
    }, [])
    
    useEffect( () => {   // get price of specific symbol
        if (allSymbols.includes(symbol)) {
            fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/price?token=${iexAPIKey}`)
            .then(res => res.json())
            .then(data => {
                setMarketPrice(data)
            })
            // .catch( error => {console.log('error', error)})
        } else {
            setMarketPrice(0)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [symbol, buySell])
    
    useEffect( () => {
        setTransSucess(false)
        setTransUnSuccess(false)
        setNotEnoughStocks(false)
    }, [symbol, buySell, portfolioID, volume])

    return(
        <ShrinkingComponentWrapper>
            <form onSubmit={submitHandler}>
                <FormSelectWrapper className="quickTrade">
                    {props.fromPage === 'HomePage' ? <TitleSpan>Stock Quick Trade</TitleSpan> : <TitleSpan>Stock Trade</TitleSpan>}
                    {
                    !allPortfoliosArray || allPortfoliosArray.length === 0 ?
                    null
                    :
                    <BuySellSelectorWrapper>
                        <BuySelectButton type="button" buySell={buySell} onClick={() => setBuySell("B")}>BUY</BuySelectButton>
                        <SellSelectButton type="button" buySell={buySell} onClick={() => setBuySell("S")}>SELL</SellSelectButton>
                    </BuySellSelectorWrapper>
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
                                    id="company-input-stock"
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
                            notEnoughStocks ? <ErrorSpan><em>Not enough stocks to sell at this volume</em></ErrorSpan> : ''
                        }
                        {
                        transSuccess && buySell === 'B' ? <div><i className="fas fa-check-circle"></i> <em className="transmessage">Transaction Successful</em></div> :  transSuccess && buySell === 'S' ? <div><i className="fas fa-check-circle"></i> <em className="transmessage">Transaction Successful</em></div> : ""
                                                  
                        }
                        {
                            transUnSuccess && buySell === 'B' ? <div> <i className="fas fa-times-circle"></i><em className="transmessage">Transaction Unsuccessful</em></div> : transUnSuccess && buySell === 'S' ? <div> <i className="fas fa-times-circle"></i><em className="transmessage">Transaction Unsuccessful</em></div> : ""
                        }
                        <ButtonWrapper>
                            {
                                buySell === 'B' ?
                                <button className="buy" type="submit" value="Submit">Buy</button>
                                :
                                <button className="sell" type="submit" value="Submit">Sell</button>
                            }
                        </ButtonWrapper>
                    </>
                }
            </form>
        </ShrinkingComponentWrapper>
    )
}

export default StockQuickTrade
