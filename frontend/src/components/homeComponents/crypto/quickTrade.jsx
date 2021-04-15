import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import {FormSelectWrapper} from "../../../styles/components/cryptoStyles/bitCoinStyles";
import {SelectorWrapper, TransacWrapper, ButtonWrapper} from '../../../styles/components/cryptoStyles/quickTradeStyles'
import { postNewTransactionFetch } from '../../../store/fetches/transactionFetches'; 
import { Link } from 'react-router-dom';
import { ErrorSpan } from '../../../styles/globalParts/textStyles';
import { addTransactionAction } from '../../../store/actions/transactionsAction';

export const CryptoQuickTrade = (props) => {

    const allTransactions = useSelector(state => state.transactionsReducer.transactions);
    useEffect(() => {
        console.log('allData', allTransactions)
    }, [allTransactions])

    const dispatch = useDispatch();
    const allCryptos = useSelector(state => state.cryptoReducer.allCryptos);  //get price
    // console.log("CryptoQuickTrade ~ allCryptos", allCryptos)
  
    // const dispatch = useDispatch()
    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)
    const [buySell, setBuySell] = useState();
    const [symbol, setSymbol] = useState();
    const [portfolioID, setPortfolioID] = useState();
    const [amount, setAmount] = useState();
    const [pricePerCoin, setPricePerCoin] = useState();
    const type = "C";
    const [allSymbols, setAllSymbols] = useState([]);
    const [incorrectSymbol, setIncorrectSymbol] = useState(false);
    const [notEnoughCoins, setNotEnoughCoins] = useState(false);
    const [bidPrice, setBidPrice] = useState(0);
    const [askPrice, setAskPrice] = useState(0);
    
    const submitHandler = (e) => {
        if (allSymbols.includes(symbol)) {
            e.preventDefault();
            console.log(buySell, portfolioID, symbol, amount, pricePerCoin,type)
            postNewTransactionFetch(buySell, portfolioID, `${symbol}USDT`, amount, pricePerCoin, type)
                .then(data => {
                    console.log('in crypto quicktrade submitHandler', data)
                    dispatch(addTransactionAction(data));
                })
                .catch(error => {
                    // console.log(error.split('')[error.length-1])
                    if (error.toString().slice(-1) === '3') {
                        console.log('error', error)
                        // console.log("You don't have enough coins to sell")
                        setNotEnoughCoins(true);
                    }
                })
            setIncorrectSymbol(false)
        } else {
            e.preventDefault();
            setIncorrectSymbol(true)
        }
    }

    useEffect( () => {  //get crypto names
        const symbolsArray = allCryptos.map( crypto => {
            let singleSymbol = crypto.symbol;
            return singleSymbol.slice(0, -4)})
        // symbolsArray.sort()
        setAllSymbols(symbolsArray.sort());
        // console.log("useEffect ~ symbolsArray", symbolsArray)
        // console.log('allSymbols', allSymbols)
    }, [allCryptos]);

    useEffect( () => {
        if (allSymbols.includes(symbol)) {
            const crypto = allCryptos.filter( crypto => crypto.symbol === `${symbol}USDT`);
            // console.log("symbolInputHandler ~ crypto", crypto)
            if (buySell === 'B') {
                setBidPrice(Number(crypto[0].bidPrice).toFixed(2)) 
            } else if (buySell === 'S') {
                setAskPrice(Number(crypto[0].askPrice).toFixed(2));
            }
        } else {
            setBidPrice(0)
            setAskPrice(0)
        }
    }, [symbol, buySell])
    
    useEffect( () => {
        setNotEnoughCoins(false)
    }, [symbol, buySell, portfolioID, amount])

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
                        <select className="selector" defaultValue={''} onChange={e => setBuySell(e.target.value)} required>
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
                            <select 
                                className="selector" 
                                onChange={ e => setPortfolioID(e.target.value)} 
                                defaultValue={""}
                                required
                            >
                                <option value="" disabled>Select portfolio</option>
                                {
                                    allPortfoliosArray.map( (portfolio, index) => 
                                        <option key={index} value={portfolio.id}>{`${portfolio.name}`}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="currSelect amountInput">
                            <label htmlFor="company-input">Cryptocurrency</label>
                            <input 
                                id="company-input" 
                                className="selector" 
                                list="cryptoSymbols" 
                                style={{"textTransform":"uppercase"}} 
                                onChange={e => setSymbol(e.target.value.toUpperCase())} 
                                required
                            />
                            <datalist id="cryptoSymbols" >
                                { allSymbols && allSymbols.length !== 0 ?                                       
                                    allSymbols.map( (symbol, index) => 
                                    <option value={symbol} key={index} />
                                    )                                      
                                    : null
                                }
                            </datalist>
                        </div>  
                        <div className="transacItem amountInput">
                            <label>Amount</label>
                            {
                                buySell === 'B' ?
                                <input 
                                    type="number" 
                                    name="amount" 
                                    step="0.000001" 
                                    min="0.000001"
                                    placeholder={amount} 
                                    value={amount} 
                                    onChange={e => setAmount(e.target.value)} 
                                    required
                                />
                                :
                                <input 
                                    type="number" 
                                    name="amount" 
                                    step="0.000001" 
                                    min="0.000001"
                                    placeholder={amount} 
                                    value={amount} 
                                    onChange={e => setAmount(e.target.value)} 
                                    required
                                />
                            }
                        </div>
                        <div className="transacItem amountInput">
                            <p>Price per Coin</p>
                            <input 
                                type="number" 
                                step="0.001" 
                                min="0.001"
                                placeholder={buySell === 'B' ? bidPrice : buySell === 'S' ? askPrice : "0.00"} 
                                value={pricePerCoin} 
                                onChange={e => setPricePerCoin(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="transacItem">
                            <p>{'Market Price '} {buySell === 'B' ? '(Bid)' : buySell === 'S' ? '(Ask)' : null}</p>
                            <span>{`${buySell === 'B' ? bidPrice : buySell === 'S' ? askPrice : "0.00"}  USD`}</span>
                        </div>
                        <div className="transacItem">
                            <p>Total Price</p>
                            <span>{`${amount*pricePerCoin ? parseFloat(amount*pricePerCoin).toFixed(2) : '0.00'}  USD`}</span>
                        </div>
                    </TransacWrapper>
                    {
                        incorrectSymbol ? <ErrorSpan><em>Symbol given is invalid</em></ErrorSpan> : ''
                    }
                    {
                        notEnoughCoins ? <ErrorSpan><em>Not enough coins to sell at this amount</em></ErrorSpan> : ''
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


