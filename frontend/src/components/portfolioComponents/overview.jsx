import React, {useEffect, useState} from 'react';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import {HeadlineFont, Headline, OverviewBar, TempDiv, Desc, NetworthContainer, IconConatiner} from '../../styles/components/portfolioStyles';
import {useSelector} from 'react-redux';
import {allTheme} from '../../styles/Themes';
import {StockModal2} from "../quickTradeModal/stockOverview";
import {CryptoModal2} from "../quickTradeModal/cryptoOverview";


const Overview = ({calculations, realtimeData}) => {

    const [showStockModal, setStockShowModal] = useState(false);
    const [showCryptoModal, setCryptoShowModal] = useState(false);
    const [symbolCrypto, setSymbolCrypto] = useState();
    const [stockSymbol, setStockSymbol] = useState();

    const [currentValues, setCurrentValues] = useState([]);
    const [addingCurrentValue, setAddingCurrentValue] = useState({});

    let colors = [allTheme.vibrantturquoise, allTheme.darkblue, allTheme.yellow, allTheme.vibrantorange];
    let currentColor = -1;

    const specificPortfolioArray = useSelector(state => state.specificPortfolioReducer.calculations)

    const getBackgroundColor = () => {
        if (currentColor >= colors.length -1) {
            currentColor = 0;
        } else {
            currentColor++;
        }
        return colors[currentColor];
    }

    const getCurrentSymbolValue = (symbol, type) => {
        const thisCalc = calculations.filter(calc => calc.symbol === symbol)[0].quantity;
        const thisPrice = type === 'C' ? realtimeData.filter(data => data.symbol === symbol)[0].lastPrice : realtimeData.filter(data => data.symbol === symbol)[0].latestPrice;
        const currentValue = thisCalc * thisPrice;
        return <p>{currentValue.toFixed(2)}</p>
    }

    const getPercentageChanges = (symbol, type) => {
        const thisCalc = calculations.filter(calc => calc.symbol === symbol)[0];
        const thisRealtime = realtimeData.filter(data => data.symbol === symbol)[0];

        const thisQuantity = thisCalc.quantity;

        const thisPrice = type === 'C' ? thisRealtime.lastPrice : thisRealtime.latestPrice;
        const yesterdayPrice = type === 'C' ? thisRealtime.prevClosePrice : thisRealtime.previousClose;

        const yesterdayValue = thisQuantity * yesterdayPrice;
        const currentValue = thisQuantity * thisPrice;

        const percentageChangeToday = (currentValue - yesterdayValue) / yesterdayValue * 100;
        const percentageChangeTotal = (currentValue - thisCalc.invested) / thisCalc.invested * 100;

        return (
            <NetworthContainer>
                <TempDiv>
                    <Desc>Total</Desc>
                    <p>
                        {percentageChangeTotal > 0 ?
                            <i className="fas fa-angle-double-up" style={{color: 'green'}}></i>
                            :
                            <i className="fas fa-angle-double-down" style={{color: 'red'}}></i>
                        }
                        {percentageChangeTotal.toFixed(2)} %</p>
                </TempDiv>
                <TempDiv>
                    <Desc>Today</Desc>
                    <p>
                        {percentageChangeToday > 0 ?
                            <i className="fas fa-angle-double-up" style={{color: 'green'}}></i>
                            :
                            <i className="fas fa-angle-double-down" style={{color: 'red'}}></i>
                        }
                        {percentageChangeToday.toFixed(2)} %</p>
                </TempDiv>
            </NetworthContainer>
        )
    }

    return (<>
            <CryptoModal2  symbol = {`${symbolCrypto}`} showCryptoModal={showCryptoModal} setCryptoShowModal={setCryptoShowModal}/>
            <StockModal2 stockSymbol={stockSymbol}  symbol = {stockSymbol} showStockModal={showStockModal} setStockShowModal={setStockShowModal}/>
            <ShrinkingComponentWrapper>
            <Headline>Overview</Headline>
            {calculations.map((calculation, index) =>
                {if (calculation.invested > 0) {
                    return (
                <OverviewBar key={index} style={{backgroundColor: getBackgroundColor()}}>
                    <IconConatiner>
                        {calculation.type === "S"
                        ? <i className="fas fa-briefcase"></i>
                        : <i className="fab fa-btc"></i>
                        }
                        <HeadlineFont>{calculation.symbol}</HeadlineFont>
                        {calculation.type === "S"
                        ? <>
                                <button onClick={()=>{
                                    setStockShowModal(true);
                                    setStockSymbol(calculation.symbol);
                                }}>BUY/SELL</button>
                          </>
                        : <>
                                <button onClick={()=>{
                                    setCryptoShowModal(true);
                                    setSymbolCrypto(calculation.symbol);
                                }}>BUY/SELL</button>
                          </>
                        }
                    </IconConatiner>
                    <NetworthContainer>
                        <TempDiv>
                            <Desc>Invested</Desc>
                            <p>{calculation.invested.toFixed(2)} $</p>
                        </TempDiv>
                        <TempDiv>
                            <Desc>Current value</Desc>
                            {realtimeData.length === calculations.length ?
                                getCurrentSymbolValue(calculation.symbol, calculation.type)
                                : ''}
                        </TempDiv>
                    </NetworthContainer>
                    <div>
                        <TempDiv>
                            <Desc>Quantity</Desc>
                            <p>{calculation.quantity.toFixed(2)}</p>
                        </TempDiv>
                    </div>
                    {realtimeData.length === calculations.length ?
                        getPercentageChanges(calculation.symbol, calculation.type)
                        : ''}
                </OverviewBar>
            )}})}
        </ShrinkingComponentWrapper>
        </>
)}

export default Overview;