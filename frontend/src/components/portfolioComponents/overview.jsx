import React, {useEffect, useState} from 'react';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import {HeadlineFont, Headline, OverviewBar, TempDiv, Desc, NetworthContainer, IconConatiner} from '../../styles/components/portfolioStyles';
import {useSelector} from 'react-redux';
import {allTheme} from '../../styles/Themes';
import {StockModal2} from "../quickTradeModal/stockOverview";
import {CryptoModal2} from "../quickTradeModal/cryptoOverview";


const Overview = ({calculations}) => {

    const [showStockModal, setStockShowModal] = useState(false);
    const [showCryptoModal, setCryptoShowModal] = useState(false);
    const [symbolCrypto, setSymbolCrypto] = useState();
    const [stockSymbol, setStockSymbol] = useState();

    let colors = [allTheme.vibrantturquoise, allTheme.darkblue, allTheme.yellow, allTheme.vibrantorange];
    let currentColor = -1;

    const specificPortfolioArray = useSelector(state => state.specificPortfolioReducer.calculations)

    const getBackgroundColor = () => {
        if (currentColor >= colors.length) {
            currentColor = 0;
        } else {
            currentColor++;
        }
        return colors[currentColor];
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
                            <button onClick={()=>{setStockShowModal(true);setStockSymbol(calculation.symbol);}}>BUY/SELL</button>
                      </>
                    : <>
                            <button onClick={()=>{setCryptoShowModal(true);setSymbolCrypto(calculation.symbol);}}>BUY/SELL</button>
                      </>
                    }
                </IconConatiner>
                <NetworthContainer>
                    <TempDiv>
                        <Desc>invested</Desc>
                        <p>{calculation.invested} $</p>
                    </TempDiv>
                    <TempDiv>
                        <Desc>current</Desc>
                        <p>34924</p>
                    </TempDiv>
                </NetworthContainer>
                <div>
                    <TempDiv>
                        <Desc>quantity</Desc>
                        <p>{calculation.quantity}</p>
                    </TempDiv>
                </div>
                <p><i className="fas fa-angle-double-down"></i> 10%</p>
            </OverviewBar>
            )}})}
        </ShrinkingComponentWrapper>
        </>
)}

export default Overview;