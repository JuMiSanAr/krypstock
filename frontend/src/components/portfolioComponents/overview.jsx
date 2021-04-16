import React, {useEffect, useState} from 'react';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import {HeadlineFont, Headline, OverviewBar, TempDiv, Desc, NetworthContainer, IconConatiner, ValueText} from '../../styles/components/portfolioStyles';
import {useSelector} from 'react-redux';
import {allTheme} from '../../styles/Themes';
import {StockModal2} from "../quickTradeModal/stockOverview";
import {CryptoModal2} from "../quickTradeModal/cryptoOverview";
import {Content} from "../../styles/components/buttonStyles";


const Overview = ({calculations, realtimeData, portfolioname, portfolioID, portfolioCreated}) => {

    const todayDate = new Date()
    const month = ("0" + (todayDate.getMonth() + 1)).slice(-2);
    const day = ("0" + todayDate.getDate()).slice(-2);
    const year = todayDate.getFullYear();

    const todayStringDate = `${year}-${month}-${day}`;
    const portfolioStringDate = portfolioCreated.slice(0, 10);

    const [showStockModal, setStockShowModal] = useState(false);
    const [showCryptoModal, setCryptoShowModal] = useState(false);
    const [symbolCrypto, setSymbolCrypto] = useState();
    const [stockSymbol, setStockSymbol] = useState();

    const [currentValues, setCurrentValues] = useState([]);
    const [addingCurrentValue, setAddingCurrentValue] = useState({});

    let colors = [allTheme.vibrantturquoise, allTheme.darkblue, allTheme.yellow, allTheme.vibrantorange];
    let currentColor = -1;

    const specificPortfolioArray = useSelector(state => state.specificPortfolioReducer.calculations)
    console.log('specific portfolio',specificPortfolioArray)
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
        return <p>$ {currentValue.toFixed(2)}</p>
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
                        {todayStringDate !== portfolioStringDate && percentageChangeToday > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}></i> : ''}
                        {todayStringDate !== portfolioStringDate && percentageChangeToday < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}></i> : ''}
                        {todayStringDate === portfolioStringDate && percentageChangeTotal > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}></i> : ''}
                        {todayStringDate === portfolioStringDate && percentageChangeTotal < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}></i> : ''}

                        {todayStringDate !== portfolioStringDate ? percentageChangeToday.toFixed(2) : ''}
                        {todayStringDate === portfolioStringDate ? percentageChangeTotal.toFixed(2) : ''}
                        %</p>
                </TempDiv>
            </NetworthContainer>
        )
    }

    return (<>
            <CryptoModal2  symbol = {`${symbolCrypto}`} showCryptoModal={showCryptoModal} setCryptoShowModal={setCryptoShowModal} portfolioname={portfolioname} portfolioID={portfolioID}/>
            <StockModal2 stockSymbol={stockSymbol}  symbol = {stockSymbol} showStockModal={showStockModal} setStockShowModal={setStockShowModal} portfolioname={portfolioname} portfolioID={portfolioID}/>
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
                                <Content onClick={()=>{
                                    setStockShowModal(true);
                                    setStockSymbol(calculation.symbol);
                                }}>BUY/SELL</Content>
                          </>
                        : <>
                                <Content onClick={()=>{
                                    setCryptoShowModal(true);
                                    setSymbolCrypto(calculation.symbol);
                                }}>BUY/SELL</Content>
                          </>
                        }
                    </IconConatiner>
                    <NetworthContainer>
                        <TempDiv>
                            <Desc>Invested</Desc>
                            <ValueText>$ {calculation.invested.toFixed(2)}</ValueText>
                        </TempDiv>
                        <TempDiv>
                            <Desc>Current value</Desc>
                            <ValueText>{realtimeData.length === calculations.length ?
                                getCurrentSymbolValue(calculation.symbol, calculation.type)
                                : ''}
                            </ValueText>
                        </TempDiv>
                        <TempDiv>
                            <Desc>Quantity</Desc>
                            <ValueText>{calculation.quantity.toFixed(2)}</ValueText>
                        </TempDiv>
                    </NetworthContainer>
                    {realtimeData.length === calculations.length ?
                        getPercentageChanges(calculation.symbol, calculation.type)
                        : ''}
                </OverviewBar>
            )}})}
        </ShrinkingComponentWrapper>
        </>
)}

export default Overview;