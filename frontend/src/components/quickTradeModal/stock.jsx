import React, { useRef, useState } from 'react';
import { Background, CloseModalButton, ContentWrapper, ModalContent, CryptStockFormSelectWrapper, CrypStockTransacWrapper } from '../../styles/components/modalStyles';
import {useSelector} from "react-redux";
import { ButtonWrapper} from '../../styles/components/cryptoStyles/quickTradeStyles'
import { Link } from 'react-router-dom';
import {ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import { postNewTransactionFetch } from '../../store/fetches/transactionFetches';

export const StockModal = ({ showStockModal, setStockShowModal, symbol, stockSymbol }) => {
    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)
    
    const [buySell, setBuySell] = useState();
    const [portfolioID, setPortfolioID] = useState();
    const [volume, setVolume] = useState();
    const [pricePerShare, setPricePerShare] = useState();
    const type = "S";

    // console.log("symbol", stockSymbol)
    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(buySell, portfolioID, symbol, volume, pricePerShare,type)
        postNewTransactionFetch(buySell, portfolioID, stockSymbol, volume, pricePerShare, type)
        .then(data => {
            console.log('in stock quicktrade submitHandler', data)
        })
        setStockShowModal(false);
    }

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
                       <h4>Stock Quick Trade</h4> 
                    </div>
                    {
                    !allPortfoliosArray || allPortfoliosArray.length === 0 ?
                    null
                    :
                        <div className="buySell">
                            <select className="selector" defaultValue={'DEFAULT'} onChange={e => setBuySell(e.target.value)} required>
                                <option value="DEFAULT" disabled>Select</option>
                                <option value="B">Buy</option>
                                <option value="S">Sell</option>
                            </select>
                        </div>
                    }
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
                            <div className="amountInput extra-margin">
                                <div>
                                <label htmlFor="company-input">Portfolio</label>
                                </div>
                                <div>
                                <select className="selector" defaultValue={'DEFAULT'} onChange={ e => setPortfolioID(e.target.value)} required>
                                    <option value="DEFAULT" disabled>Select portfolio</option>
                                    {
                                        allPortfoliosArray.map( (portfolio, index) => 
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
                                <div>
                                <p>Total Price</p>
                                </div>
                                <div>
                                <span>{`${volume*pricePerShare ? parseFloat(volume*pricePerShare).toFixed(2) : '0.00' }  USD`}</span>
                                </div>   
                            </div>
                        </CrypStockTransacWrapper> 
                        <ButtonWrapper>
                            {/* <button type="submit" value="Submit">Submit</button> */}
                            <button type="submit" value="Submit" onClick={submitHandler}>Submit</button>
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