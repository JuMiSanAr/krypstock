import React, { useRef, useState, useEffect } from 'react';
import { Background, CloseModalButton, ContentWrapper, ModalContent, CryptStockFormSelectWrapper, CrypStockTransacWrapper } from '../../styles/components/modalStyles';
import { useSelector } from "react-redux";
import { ButtonWrapper, BuySelectButton, BuySellSelectorWrapper, SellSelectButton} from '../../styles/components/cryptoStyles/quickTradeStyles'
import { Link } from 'react-router-dom';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import { postNewTransactionFetch } from '../../store/fetches/transactionFetches';
import portfoliosFetch from '../../store/fetches/portfoliosFetches';
import { portfoliosAction } from '../../store/actions/portfoliosAction';
import { useDispatch } from "react-redux";
import { TitleSpan } from '../../styles/globalParts/textStyles';


export const CryptoModal = ({ showCryptoModal, setCryptoShowModal, symbol }) => {
    const allPortfoliosArray = useSelector(state => state.portfoliosReducer.portfolios)
    const [buySell, setBuySell] = useState('B');
    const [portfolioID, setPortfolioID] = useState();
    const [amount, setAmount] = useState(0);
    const [pricePerCoin, setPricePerCoin] = useState(0);
    const type = "C";

    const allCryptos = useSelector(state => state.cryptoReducer.allCryptos);
    const [bidPrice, setBidPrice] = useState(0);
    const [askPrice, setAskPrice] = useState(0);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(buySell, portfolioID, symbol, amount, pricePerCoin, type)
        postNewTransactionFetch(buySell, portfolioID, symbol, amount, pricePerCoin, type)
            .then(data => {
                setCryptoShowModal(false)
                // console.log('in crypto quicktrade submitHandler', data)
            })


    }

    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setCryptoShowModal(false);
        }
    };

    useEffect(() => {
        const crypto = allCryptos.filter(crypto => crypto.symbol === symbol);
        if (buySell === 'B') {
            setBidPrice(Number(crypto[0].bidPrice).toFixed(2))
        } else if (buySell === 'S') {
            setAskPrice(Number(crypto[0].askPrice).toFixed(2));
        }
        // else {
        //     console.log('symbol', symbol)
        // }
    }, [symbol, buySell])


    // fetching portfolio list here becuase it takes time
    // to get portfolio list from redux store unless 
    // we go back to portfolio page to fetch

    useEffect(() => {
        portfoliosFetch()
            .then(data => {
                const action = portfoliosAction(data);
                dispatch(action);
            })
    }, []);




    return (
        <>
            {showCryptoModal ? (

                <Background onClick={closeModal} ref={modalRef}>
                    <ContentWrapper>
                        <ShrinkingComponentWrapper showCryptoModal={showCryptoModal}>
                            <ModalContent>
                                <form onSubmit={submitHandler}>
                                    <CryptStockFormSelectWrapper>
                                        <div className="title">
                                            <TitleSpan>Crypto Trade</TitleSpan>
                                        </div>
                                        {
                                            !allPortfoliosArray || allPortfoliosArray.length === 0 ?
                                                null
                                                :
                                                // <div className="buySell">
                                                //     <select className="selector" defaultValue={'DEFAULT'} onChange={e => setBuySell(e.target.value)} required>
                                                //         <option value="DEFAULT" disabled>Select</option>
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
                                                    <div className="amountInput">
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
                                                    <div className="currSelect amountInput">
                                                        <div>
                                                            <label htmlFor="company-input">Cryptocurrency</label>
                                                        </div>
                                                        <div>
                                                            <p className="selector">{symbol ? symbol.slice(0, -4) : ''}</p>
                                                        </div>
                                                    </div>
                                                    <div className="amountInput">
                                                        <div>
                                                            <label>Amount</label>
                                                        </div>
                                                        <div>
                                                            <input className="input" type="text" name="amount" placeholder="amount" value={amount} onChange={e => setAmount(e.target.value)} required />
                                                        </div>
                                                    </div>
                                                    <div className="amountInput">
                                                        <div>
                                                            <p>Price per Coin</p>
                                                        </div>
                                                        <div>
                                                            <input className="input" type="number" placeholder="0" value={pricePerCoin} onChange={e => setPricePerCoin(e.target.value)} required />
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
                            </ModalContent>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setCryptoShowModal(false)}
                            />
                        </ShrinkingComponentWrapper>
                    </ContentWrapper>
                </Background>
            ) : null}
        </>
    );
};