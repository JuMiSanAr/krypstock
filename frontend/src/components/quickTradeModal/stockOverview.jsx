import React, { useEffect, useRef, useState } from 'react';
import {  BackgroundOverview, CloseModalButton, ContentWrapper, ModalContent, CrypStockTransacWrapper, SubmitButton } from '../../styles/components/modalStyles';
import {useDispatch, useSelector} from "react-redux";
import { BuySellSelectorWrapper, BuySelectButton, SellSelectButton} from '../../styles/components/cryptoStyles/quickTradeStyles'
import { Link } from 'react-router-dom';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import { postNewTransactionFetch } from '../../store/fetches/transactionFetches';
import { iexSandboxKey } from "../../store/constants";
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

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(buySell, portfolioID, symbol, volume, pricePerShare,type)
        postNewTransactionFetch(buySell, portfolioID, symbol, volume, pricePerShare, type)
            .then(data => {
                setStockShowModal(false);
                // console.log('in stock quicktrade submitHandler', data)
                return specificPortfolioFetch(portfolioID)
            })
            .then(data => {
                const action = specificPortfolioAction(data)
                dispatch(action)
            })
            .catch(error => {
                // console.log(error.split('')[error.length-1])
                if (error.toString().slice(-1) === '3') {
                    console.log('error', error)
                    console.log("You don't have enough coins to sell")
                    setNotEnoughStocks(true);
                }
            })
    }

    const modalRef = useRef();

    const closeModal = e => {
        e.preventDefault();
        if (modalRef.current === e.target) {
            setStockShowModal(false);
        }
    };

    useEffect(() => {
        if (symbol) {
            fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/price?token=${iexSandboxKey}`)
                .then(res => res.json())
                .then(data => {
                    // console.log("useState ~ data", data)
                    setMarketPrice(data)
                })
                .catch(error => { console.log('error', error) })
        }
    }, [symbol, buySell])

    useEffect(() => {
        setNotEnoughStocks(false)
    }, [symbol, buySell, portfolioID, volume])

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
                                                        <p className="selector">{calculations ? calculations.filter(calculation => calculation.symbol === symbol)[0].quantity.toFixed(2) : ''}</p>
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
                                            <SubmitButton>
                                                <button type="submit" value="Submit" onClick={submitHandler}>Submit</button>
                                            </SubmitButton>
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