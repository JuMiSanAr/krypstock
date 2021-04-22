import React, { useRef, useState, useEffect } from 'react';
import { BackgroundOverview, CloseModalButton, ContentWrapper, ModalContent, CrypStockTransacWrapper, SubmitButton } from '../../styles/components/modalStyles';
import { useSelector } from "react-redux";
import {ButtonWrapper, BuySellSelectorWrapper, BuySelectButton, SellSelectButton } from '../../styles/components/cryptoStyles/quickTradeStyles'
import { Link } from 'react-router-dom';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import { postNewTransactionFetch } from '../../store/fetches/transactionFetches';
import portfoliosFetch, { specificPortfolioFetch } from '../../store/fetches/portfoliosFetches';
import { portfoliosAction } from '../../store/actions/portfoliosAction';
import { useDispatch } from "react-redux";
import { specificPortfolioAction } from "../../store/actions/specificPortfolioAction";
import { ErrorSpan } from "../../styles/globalParts/textStyles";


export const CryptoModal2 = ({ showCryptoModal, setCryptoShowModal, symbol, portfolioname, portfolioID, calculations }) => {
    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)
    const [buySell, setBuySell] = useState('B');
    const [amount, setAmount] = useState(0);
    const [pricePerCoin, setPricePerCoin] = useState(0);
    const [notEnoughCoins, setNotEnoughCoins] = useState(false);
    const [transSuccess, setTransSucess] = useState(false);
    const [transUnSuccess , setTransUnSuccess ] = useState(false);

    const type = "C";

    const allCryptos = useSelector(state => state.cryptoReducer.allCryptos);
    const [bidPrice, setBidPrice] = useState(0);
    const [askPrice, setAskPrice] = useState(0);
    const dispatch = useDispatch();

    const [transactionModalAmount, setTransactionModalAmount] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault();
        postNewTransactionFetch(buySell, portfolioID, symbol, amount, pricePerCoin, type)
            .then(() => {
                setTransSucess(true)
                setTransUnSuccess(false)
                // setCryptoShowModal(false)
                return specificPortfolioFetch(portfolioID)})
               
            .then(data => {
                const action = specificPortfolioAction(data)
                dispatch(action)
            })
            .catch(error => {
                setTransUnSuccess(true)
                if (error.toString().slice(-1) === '3') {
                    setNotEnoughCoins(true);  
                }
            })
    }

    const modalRef = useRef();

    const closeModal = e => {
        setTransSucess(false)
        setTransUnSuccess(false)
        if (modalRef.current === e.target) {
            setCryptoShowModal(false);  
        }
    };

    useEffect(() => {
        const crypto = allCryptos.filter(crypto => crypto.symbol === symbol);
        if (buySell === 'B' && crypto[0]) {
            setBidPrice(Number(crypto[0].bidPrice).toFixed(2))
        } else if (buySell === 'S' && crypto[0]) {
            setAskPrice(Number(crypto[0].askPrice).toFixed(2));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [symbol, buySell])

    useEffect(() => {
        setNotEnoughCoins(false)
    }, [symbol, buySell, portfolioID, amount])
    // fetching portfolio list here becuase it takes time
    // to get portfolio list from redux store unless 
    // we go back to portfolio page to fetch

    useEffect(() => {
        portfoliosFetch()
            .then(data => {
                const action = portfoliosAction(data);
                dispatch(action);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (calculations && symbol) {
            const thisCalc = calculations.filter(calculation => calculation.symbol === symbol);
                if (thisCalc[0].quantity) {
                    setTransactionModalAmount(thisCalc[0].quantity.toFixed(2));
                } else {
                    setTransactionModalAmount(0);
                }
        }
    }, [calculations, symbol]);

    return (
        <>
            {showCryptoModal ? (
                <BackgroundOverview onClick={closeModal} ref={modalRef}>
                    <ContentWrapper>
                        <ShrinkingComponentWrapper showCryptoModal={showCryptoModal}>
                            <ModalContent>
                                <BuySellSelectorWrapper>
                           
                                        <BuySelectButton buySell={buySell} value="B" onClick={e => setBuySell(e.target.value)}>BUY</BuySelectButton>
                                 
                              
                                        <SellSelectButton buySell={buySell} value="S" onClick={e => setBuySell(e.target.value)}>SELL</SellSelectButton>
                                </BuySellSelectorWrapper>
                                {
                                    !allPortfoliosArray || allPortfoliosArray.length === 0 ?
                                        <div className='empty'>
                                            <span>You need a portfolio to trade</span>
                                            <br />
                                            <Link to="/portfolio-list/">
                                                <span className='create-portfolio'>Create your first portfolio</span>
                                            </Link>
                                        </div>
                                        :
                                        <>
                                            <CrypStockTransacWrapper>
                                                <div className="amountInput">
                                                    <div>
                                                        <label htmlFor="company-input">Portfolio</label>
                                                    </div>
                                                    <div>
                                                        <p value={portfolioID}>{`${portfolioname}`}</p>
                                                    </div>
                                                </div>
                                                <div className="currSelect amountInput">
                                                    <div>
                                                        <label htmlFor="company-input">Cryptocurrency</label>
                                                    </div>
                                                    <div>
                                                        <p className="selector">{symbol ? symbol.slice(0, -4) : ''}</p>
                                                    </div>
                                                </div>
                                                <div className="currSelect amountInput">
                                                    <div>
                                                        <label htmlFor="company-input">Current quantity</label>
                                                    </div>
                                                    <div>
                                                        <p className="selector">{transactionModalAmount}</p>
                                                    </div>
                                                </div>
                                                <div className="amountInput">
                                                    <div>
                                                        <label>Transaction quantity</label>
                                                    </div>
                                                    <div>
                                                        <input className="input" type="text" name="amount" placeholder="0" onChange={e => setAmount(e.target.value)} required />
                                                    </div>
                                                </div>
                                                <div className="amountInput">
                                                    <div>
                                                        <p>Price per Coin</p>
                                                    </div>
                                                    <div>
                                                        <input className="input" type="number" placeholder="0" onChange={e => setPricePerCoin(e.target.value)} required />
                                                    </div>
                                                </div>
                                                <div className="amountInput">
                                                    <div>
                                                        <p>{'Market Price '} {buySell === 'B' ? '(Bid)' : buySell === 'S' ? '(Ask)' : null}</p>
                                                    </div>
                                                    <div>
                                                        <span>{`${buySell === 'B' ? bidPrice : buySell === 'S' ? askPrice : "0"}  USD`}</span>
                                                    </div>
                                                </div>
                                                <div className="transacItem amountInput">
                                                    <div>
                                                        <p>Total Price</p>
                                                    </div>
                                                    <div>
                                                        <span>{`${amount * pricePerCoin ? parseFloat(amount * pricePerCoin).toFixed(2) : '0.00'}  USD`}</span>
                                                    </div>
                                                </div>
                                            </CrypStockTransacWrapper>
                                            {
                                                notEnoughCoins ? <ErrorSpan><em>Not enough coins to sell at this amount</em></ErrorSpan> : ''
                                            }
                                            {
                                                transSuccess && buySell === 'B' ? <div><i className="fas fa-check-circle"></i> <em className="transmessage">Transaction Successful</em></div> :  transSuccess && buySell === 'S' ? <div><i className="fas fa-check-circle"></i> <em className="transmessage">Transaction Successful</em></div> : ""
                                                  
                                             }
                                             {
                                                 transUnSuccess && buySell === 'B' ? <div> <i className="fas fa-times-circle"></i><em className="transmessage">Transaction Unsuccessful</em></div> : transUnSuccess && buySell === 'S' ? <div> <i className="fas fa-times-circle"></i><em className="transmessage">Transaction Unsuccessful</em></div> : ""
                                             }
                                            {/* <SubmitButton>
                                                <button type="submit" value="Submit" onClick={submitHandler}>Submit</button>
                                            </SubmitButton> */}
                                             <ButtonWrapper>
                                             {
                                                
                                                        buySell === 'B' ?
                                                        <button onClick={submitHandler}  className="buy" type="submit" value="Submit">Buy</button>
                                                        :
                                                        <button onClick={submitHandler} className="sell" type="submit" value="Submit">Sell</button>     
                                                                   
                                             }
                                              </ButtonWrapper> 
                                        </>
                                }
                            </ModalContent>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setCryptoShowModal(false)}
                            />
                        </ShrinkingComponentWrapper>
                    </ContentWrapper>
                </BackgroundOverview>
            ) : null}
        </>
    );
};