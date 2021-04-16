import React, {useEffect, useRef, useState} from 'react';
import { Background, CloseModalButton, ContentWrapper, ModalContent, CryptStockFormSelectWrapper, CrypStockTransacWrapper } from '../../styles/components/modalStyles';
import {useSelector} from "react-redux";
import {ButtonWrapper, TransacWrapper} from '../../styles/components/cryptoStyles/quickTradeStyles'
import { Link } from 'react-router-dom';
import {ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import { postNewTransactionFetch } from '../../store/fetches/transactionFetches';
import {iexSandboxKey} from "../../store/constants";
import {ErrorSpan} from "../../styles/globalParts/textStyles";

export const StockModal2 = ({ showStockModal, setStockShowModal, symbol, stockSymbol,portfolioname, portfolioID }) => {
    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)
    
    const [buySell, setBuySell] = useState();
    const [volume, setVolume] = useState();
    const [pricePerShare, setPricePerShare] = useState();
    const [marketPrice, setMarketPrice] = useState();
     const [notEnoughStocks, setNotEnoughStocks] = useState(false);
    const type = "S";

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(buySell, portfolioID, symbol, volume, pricePerShare,type)
        postNewTransactionFetch(buySell, portfolioID, stockSymbol, volume, pricePerShare, type)
        .then(data => {
            setStockShowModal(false);
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
    }

  const modalRef = useRef();

  const closeModal = e => {
    e.preventDefault();
    if (modalRef.current === e.target) {
      setStockShowModal(false);
    }
  };

  useEffect( () => {
            fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/price?token=${iexSandboxKey}`)
            .then(res => res.json())
            .then(data => {
                console.log("useState ~ data", data)
                setMarketPrice(data)
            })
            .catch( error => {console.log('error', error)})

    }, [symbol, buySell])

    useEffect( () => {
        setNotEnoughStocks(false)
    }, [symbol, buySell, portfolioID, volume])

  return (
    <>
      {showStockModal ? (

            <Background onClick={closeModal} ref={modalRef}>
            <ContentWrapper>
            <ShrinkingComponentWrapper showStockModal={showStockModal}>
                <ModalContent>
                <CryptStockFormSelectWrapper>
                        <div>
                            <button value="B" onClick={e => setBuySell(e.target.value)}>BUY</button>
                        </div>
                        <div>
                            <button value="S" onClick={e => setBuySell(e.target.value)}>SELL</button>
                        </div>
                </CryptStockFormSelectWrapper>  
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
                            <div className="amountInput">
                                <div>
                                <p>Quantity</p>
                                </div>
                              <div>
                              <input className="input" type="number" placeholder="0" value={volume} onChange={e => setVolume(e.target.value)} required/>
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
                                <span>{`${volume*pricePerShare ? parseFloat(volume*pricePerShare).toFixed(2) : '0.00' }  USD`}</span>
                                </div>   
                            </div>
                        </CrypStockTransacWrapper>
                        {
                            notEnoughStocks ? <div className="amountInput"><ErrorSpan><em>Not enough stocks to sell at this amount</em></ErrorSpan></div> : ''
                        }
                        <ButtonWrapper>
                            <button type="submit" value="Submit" onClick={submitHandler}>Submit</button>
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
            </Background>
      ) : null}
    </>
  );
};