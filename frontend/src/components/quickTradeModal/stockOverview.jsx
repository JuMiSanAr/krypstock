import React, { useEffect, useRef, useState } from 'react';
import {  BackgroundOverview, CloseModalButton, ContentWrapper, ModalContent, CrypStockTransacWrapper, SubmitButton } from '../../styles/components/modalStyles';
import {useDispatch, useSelector} from "react-redux";
import {ButtonWrapper, BuySellSelectorWrapper, BuySelectButton, SellSelectButton} from '../../styles/components/cryptoStyles/quickTradeStyles'
import { Link } from 'react-router-dom';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import { postNewTransactionFetch } from '../../store/fetches/transactionFetches';
import {iexAPIKey, iexSandboxKey} from "../../store/constants";
import { ErrorSpan } from "../../styles/globalParts/textStyles";
import {specificPortfolioFetch} from "../../store/fetches/portfoliosFetches";
import {specificPortfolioAction} from "../../store/actions/specificPortfolioAction";

export const StockModal2 = ({ showStockModal, setStockShowModal, symbol, portfolioname, portfolioID, calculations }) => {
    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)

    const [buySell, setBuySell] = useState('B');
    const [volume, setVolume] = useState();
    const [pricePerShare, setPricePerShare] = useState();
    const [marketPrice, setMarketPrice] = useState();
    const [notEnoughStocks, setNotEnoughStocks] = useState(false);
    const type = "S";
    const [transSuccess, setTransSucess] = useState(false);
    const [transUnSuccess , setTransUnSuccess ] = useState(false);

    const [transactionModalAmount, setTransactionModalAmount] = useState(0);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        postNewTransactionFetch(buySell, portfolioID, symbol, volume, pricePerShare, type)
            .then(data => {
                setTransSucess(true)
                setTransUnSuccess(false)
                // setStockShowModal(false);
                return specificPortfolioFetch(portfolioID)
            })
            .then(data => {
                const action = specificPortfolioAction(data)
                dispatch(action)
            })
            .catch(error => {
                setTransUnSuccess(true)
                if (error.toString().slice(-1) === '3') {
                    setNotEnoughStocks(true);
                }
            })
    }

    const modalRef = useRef();

    const closeModal = e => {
        e.preventDefault();
        setTransSucess(false)
        setTransUnSuccess(false)
        if (modalRef.current === e.target) {
            setStockShowModal(false);
        }
    };

    useEffect(() => {
        if (symbol) {
            fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/price?token=${iexSandboxKey}`)
                .then(res => res.json())
                .then(data => {
                    setMarketPrice(data)
                })
                // .catch(error => { console.log('error', error) })
        }
    }, [symbol, buySell])

    useEffect(() => {
        setNotEnoughStocks(false)
    }, [symbol, buySell, portfolioID, volume])

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
            {showStockModal ? (

                <BackgroundOverview onClick={closeModal} ref={modalRef}>
                    <ContentWrapper>
                        <ShrinkingComponentWrapper showStockModal={showStockModal}>
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
                                                        <label htmlFor="company-input">Stock</label>
                                                    </div>
                                                    <div>
                                                        <p className="selector">{symbol}</p>
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
                                                        <p>Transaction quantity</p>
                                                    </div>
                                                    <div>
                                                        <input className="input" type="number" placeholder="0" onChange={e => setVolume(e.target.value)} required />
                                                    </div>
                                                </div>
                                                <div className="amountInput">
                                                    <div>
                                                        <p>Price per share</p>
                                                    </div>
                                                    <div>
                                                        <input className="input" type="number" placeholder="0" onChange={e => setPricePerShare(e.target.value)} required />
                                                    </div>
                                                </div>
                                                <div className="amountInput">
                                                    <p>Market Price</p>
                                                    <span>{`${marketPrice}  USD`}</span>
                                                </div>
                                                <div className="amountInput">
                                                    <div>
                                                        <p>Total Price</p>
                                                    </div>
                                                    <div>
                                                        <span>{`${volume * pricePerShare ? parseFloat(volume * pricePerShare).toFixed(2) : '0.00'}  USD`}</span>
                                                    </div>
                                                </div>
                                            </CrypStockTransacWrapper>
                                            {
                                                notEnoughStocks ? <div className="amountInput"><ErrorSpan><em>Not enough stocks to sell at this amount</em></ErrorSpan></div> : ''
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
                                onClick={() => setStockShowModal(false)}
                            />
                        </ShrinkingComponentWrapper>
                    </ContentWrapper>
                </BackgroundOverview>
            ) : null}
        </>
    );
};