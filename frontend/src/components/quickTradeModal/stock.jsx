import React, { useRef, useState, useEffect } from 'react';
import { Background, CloseModalButton, ContentWrapper, ModalContent, CryptStockFormSelectWrapper, CrypStockTransacWrapper } from '../../styles/components/modalStyles';
import { useSelector } from "react-redux";
import { ButtonWrapper, BuySelectButton, BuySellSelectorWrapper, SellSelectButton} from '../../styles/components/cryptoStyles/quickTradeStyles'
import { Link } from 'react-router-dom';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import { postNewTransactionFetch } from '../../store/fetches/transactionFetches';
import { iexSandboxKey } from '../../store/constants';

export const StockModal = ({ showStockModal, setStockShowModal, symbol, stockSymbol }) => {
    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)

    const [buySell, setBuySell] = useState("B");
    const [portfolioID, setPortfolioID] = useState();
    const [volume, setVolume] = useState();
    const [pricePerShare, setPricePerShare] = useState();
    const type = "S";

    const [marketPrice, setMarketPrice] = useState(0);
    const [notEnoughStocks, setNotEnoughStocks] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(buySell, portfolioID, symbol, volume, pricePerShare,type)
        postNewTransactionFetch(buySell, portfolioID, stockSymbol, volume, pricePerShare, type)
            .then(data => {
                setStockShowModal(false);
                // console.log('in stock quicktrade submitHandler', data)
            })
            .catch(error => {
                if (error.toString().slice(-1) === '3') {
                    setNotEnoughStocks(true);
                }
            })

    }

    useEffect( () => {   // get price of specific symbol
        // console.log('stock symbol',stockSymbol)
        if (stockSymbol) {
            fetch(`https://sandbox.iexapis.com/stable/stock/${stockSymbol}/price?token=${iexSandboxKey}`)
                .then(res => res.json())
                .then(data => {
                    setMarketPrice(data)
                })
                .catch(error => { console.log('error', error) })
        } else {
            setMarketPrice(0)
        }
    }, [stockSymbol, buySell])


    const modalRef = useRef();

    const closeModal = e => {
        e.preventDefault();
        if (modalRef.current === e.target) {
            setStockShowModal(false);
        }
    };

    return (
        <>
            {showStockModal ? (

                <Background onClick={closeModal} ref={modalRef}>
                    <ContentWrapper>
                        <ShrinkingComponentWrapper showStockModal={showStockModal}>
                            <ModalContent>
                                {/* <form onSubmit={submitHandler}> */}
                                <form>
                                    <h3 className="stock-company-name">{symbol}</h3>
                                    <CryptStockFormSelectWrapper>
                                        <div className="title">
                                            <h4>Stock Trade</h4>
                                        </div>
                                        {
                                            !allPortfoliosArray || allPortfoliosArray.length === 0 ?
                                                null
                                                :
                                                // <div className="buySell">
                                                //     <select className="selector" onChange={e => setBuySell(e.target.value)} required>
                                                //         <option value="B">Buy</option>
                                                //         <option value="S">Sell</option>
                                                //     </select>
                                                // </div>
                                                <BuySellSelectorWrapper>
                                                    <BuySelectButton type="button" buySell={buySell} onClick={e => setBuySell("B")}>BUY</BuySelectButton>
                                                    <SellSelectButton type="button" buySell={buySell} onClick={e => setBuySell("S")}>SELL</SellSelectButton>
                                                </BuySellSelectorWrapper>
                                        }
                                    </CryptStockFormSelectWrapper>
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
                                                    <div className="amountInput extra-margin">
                                                        <div>
                                                            <label htmlFor="company-input">Portfolio</label>
                                                        </div>
                                                        <div>
                                                            <select className="selector" defaultValue={'DEFAULT'} onChange={e => setPortfolioID(e.target.value)} required>
                                                                <option value="DEFAULT" disabled>Select portfolio</option>
                                                                {
                                                                    allPortfoliosArray.map((portfolio, index) =>
                                                                        <option key={index} value={portfolio.id}>{`${portfolio.name}`}</option>
                                                                    )
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="amountInput margin-quantity">
                                                        <div>
                                                            <p>Quantity</p>
                                                        </div>
                                                        <div>
                                                            <input className="input" type="number" placeholder="0" value={volume} onChange={e => setVolume(e.target.value)} required />
                                                        </div>
                                                    </div>
                                                    <div className="amountInput">
                                                        <div>
                                                            <p>Price per share</p>
                                                        </div>
                                                        <div>
                                                            <input className="input" type="number" placeholder="0" value={pricePerShare} onChange={e => setPricePerShare(e.target.value)} required />
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
                                                    notEnoughStocks ? <em>Not enough stocks to sell at this amount</em> : ''
                                                }
                                                <ButtonWrapper>
                                                    {/* <button type="submit" value="Submit">Submit</button> */}
                                                    {/* <button type="submit" value="Submit" onClick={submitHandler}>Submit</button> */}
                                                    {
                                                        buySell === 'B' ?
                                                        <button onClick={submitHandler}  className="buy" type="submit" value="Submit">Buy</button>
                                                        :
                                                        <button onClick={submitHandler} className="sell" type="submit" value="Submit">Sell</button>                          
                                                    }
                                                </ButtonWrapper>
                                            </>
                                    }
                                </form>
                            </ModalContent>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setStockShowModal(false)}
                            />
                        </ShrinkingComponentWrapper>
                    </ContentWrapper>
                </Background>
            ) : null}
        </>
    );
};