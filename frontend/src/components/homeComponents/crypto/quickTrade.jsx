import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
import {FormSelectWrapper} from "../../../styles/components/cryptoStyles/bitCoinStyles";
import { TransacWrapper, ButtonWrapper, BuySelectButton, SellSelectButton, BuySellSelectorWrapper} from '../../../styles/components/cryptoStyles/quickTradeStyles'
import { postNewTransactionFetch } from '../../../store/fetches/transactionFetches'; 
import { Link } from 'react-router-dom';
import { ErrorSpan, TitleSpan } from '../../../styles/globalParts/textStyles';
import { addTransactionAction } from '../../../store/actions/transactionsAction';

export const CryptoQuickTrade = (props) => {

    const allTransactions = useSelector(state => state.transactionsReducer.transactions);
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allTransactions])

    const dispatch = useDispatch();
    const allCryptos = useSelector(state => state.cryptoReducer.allCryptos);  //get price

    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)
    const [buySell, setBuySell] = useState("B");
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
            postNewTransactionFetch(buySell, portfolioID, `${symbol}USDT`, amount, pricePerCoin, type)
                .then(data => {
                    dispatch(addTransactionAction(data));
                })
                .catch(error => {
                    if (error.toString().slice(-1) === '3') {
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
        setAllSymbols(symbolsArray.sort());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allCryptos]);

    useEffect( () => {
        if (allSymbols.includes(symbol)) {
            const crypto = allCryptos.filter( crypto => crypto.symbol === `${symbol}USDT`);
            if (buySell === 'B') {
                setBidPrice(Number(crypto[0].bidPrice).toFixed(2)) 
            } else if (buySell === 'S') {
                setAskPrice(Number(crypto[0].askPrice).toFixed(2));
            }
        } else {
            setBidPrice(0)
            setAskPrice(0)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [symbol, buySell])
    
    useEffect( () => {
        setNotEnoughCoins(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [symbol, buySell, portfolioID, amount])

    return (
        <ShrinkingComponentWrapper> 
            <form onSubmit={submitHandler}>
                <FormSelectWrapper className="quickTrade">
                    {props.fromPage === 'HomePage' ? <TitleSpan>Crypto Quick Trade</TitleSpan> : <TitleSpan>Crypto Trade</TitleSpan>}
                    {
                    !allPortfoliosArray || allPortfoliosArray.length === 0 ?
                    null
                    :
                    <BuySellSelectorWrapper>
                        <BuySelectButton type="button" buySell={buySell} onClick={e => setBuySell("B")}>BUY</BuySelectButton>
                        <SellSelectButton type="button" buySell={buySell} onClick={e => setBuySell("S")}>SELL</SellSelectButton>
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
                            <p>Price per coin</p>
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


