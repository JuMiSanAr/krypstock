import React, { useEffect, useState } from 'react';
import { AllComponentsWrapper, ShrinkingComponentWrapper } from '../styles/globalParts/containerStyles';
import { CakeChartContainer, LegendContainer, ColorSquare, LegendWrapper, Headline } from '../styles/components/portfolioStyles';
import { PieChart } from 'react-minimal-pie-chart';
import PortfolioChart from '../components/charts/portfolioChart';
import AllInvestments from '../components/portfolioComponents/allInvestments';
import Overview from '../components/portfolioComponents/overview';
import { specificPortfolioFetch } from "../store/fetches/portfoliosFetches";
import { specificPortfolioAction } from "../store/actions/specificPortfolioAction";
import { useDispatch, useSelector } from "react-redux";
import { allCryptosAction } from '../store/actions/cryptoActions';
import { allTheme } from '../styles/Themes';
import { iexSandboxKey } from "../store/constants";
import { NaviWrapper } from '../styles/components/naviStyles/menuStyles';
import Burger from '../components/navi/burger';
import Menu from '../components/navi/menu';

const Portfolio = () => {

    const [open, setOpen] = useState(false);

    const [realtimeDataStock, setRealtimeDataStock] = useState([]);
    const [realtimeDataCrypto, setRealtimeDataCrypto] = useState([]);

    const [realtimeDataCombined, setRealtimeDataCombined] = useState([]);

    const [stockSymbols] = useState([]);
    const [cryptoSymbols] = useState([]);

    const allCryptoInfo = useSelector(state => state.cryptoReducer.allCryptos);

    useEffect(() => {
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1);

        specificPortfolioFetch(id)
            .then(data => {
                dispatch(specificPortfolioAction(data))
                const pieValues = [];
                const legend = [];
                const colors = [allTheme.vibrantturquoise, allTheme.darkblue, allTheme.yellow, allTheme.vibrantorange, allTheme.green, allTheme.purple, allTheme.blue];
                let colorIndex = 0;
                data.calculations.sort((a, b) => parseFloat(b.invested) - parseFloat(a.invested));

                data.calculations.forEach((calculation) => {

                    if (calculation.invested > 0 && colorIndex < 6) {

                        pieValues.push({
                            title: calculation.symbol,
                            value: calculation.invested,
                            color: colors[colorIndex]
                        })

                        colorIndex++;

                    }
                })

                if (data.calculations.length >= 7) {
                    const other = data.calculations.filter((value, index) => index > 5);

                    let otherValues = [];

                    for (let i = 0; i < other.length - 1; i++) {
                        let value = other[i].invested;
                        otherValues.push(value);
                    }

                    const sum = otherValues.reduce((a, b) => a + b, 0)
                    pieValues.push({
                        title: "Other",
                        value: sum,
                        color: colors[colorIndex]
                    })
                }

                for (let i = 0; i < pieValues.length; i++) {
                    legend.push({
                        title: pieValues[i].title,
                        color: pieValues[i].color
                    });
                }

                setPieData(pieValues);
                setLegend(legend);


                data.calculations.forEach(symbol => {
                    if (symbol.type === 'S') {
                        stockSymbols.push(symbol.symbol);
                    } else if (symbol.type === 'C') {
                        cryptoSymbols.push(symbol.symbol);
                    }
                })

                let stocksString = '';

                stockSymbols.forEach((symbol, index) => {

                    stocksString += symbol;
                    if (index !== stockSymbols.length - 1) {
                        stocksString += ',';
                    }
                })
                if (stocksString !== '') {
                    fetch(`https://sandbox.iexapis.com/stable/stock/market/batch?types=quote&symbols=${stocksString}&token=${iexSandboxKey}`)
                        .then(res => res.json())
                        .then(data => {
                            const fetchedData = Object.entries(data).map(entry => {
                                return entry[1].quote;
                            }
                            )
                            setRealtimeDataStock(fetchedData);
                        })
                }
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (allCryptoInfo.length) {
            setRealtimeDataCrypto(allCryptoInfo.filter(crypto => cryptoSymbols.includes(crypto.symbol)));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allCryptoInfo]);

    useEffect(() => {
        if (stockSymbols && cryptoSymbols) {
            setRealtimeDataCombined(realtimeDataStock.concat(realtimeDataCrypto));
        } else if (stockSymbols) {
            setRealtimeDataCombined(realtimeDataStock);
        } else {
            setRealtimeDataCombined(realtimeDataCrypto);
        }
    }, [realtimeDataStock, realtimeDataCrypto, stockSymbols, cryptoSymbols]);

    const [pieData, setPieData] = useState([]);
    const [legend, setLegend] = useState([])

    useEffect(() => {
        fetch('https://api.binance.com/api/v3/ticker/24hr')
            .then(res => res.json())
            .then(data => {
                const usdtFiltered = data.filter(item => item.symbol.includes("USDT"));
                const action = allCryptosAction(usdtFiltered);
                dispatch(action);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const dispatch = useDispatch()
    const portfolioInfo = useSelector(state => state.specificPortfolioReducer.portfolioInfo)

    return (
        <>
            <NaviWrapper>
                <div>
                    <Burger open={open} setOpen={setOpen}/> 
                    <Menu open={open} setOpen={setOpen} />  
                </div>  
                <div className="heading">
                <h2>{portfolioInfo.name}</h2>
                </div>
                </NaviWrapper>
            <AllComponentsWrapper>
                {
                    portfolioInfo.calculations ? <AllInvestments realtimeData={realtimeDataCombined}
                        calculations={portfolioInfo.calculations}
                        portfolioCreated={portfolioInfo.created} />
                        : 'No Data Available'
                }
                {
                    portfolioInfo.calculations ? <Overview calculations={portfolioInfo.calculations}
                        realtimeData={realtimeDataCombined}
                        transactions={portfolioInfo.transactions}
                        portfolioname={portfolioInfo.name}
                        portfolioID={portfolioInfo.id}
                        portfolioCreated={portfolioInfo.created} />
                        : 'No Data Available'
                }

                <ShrinkingComponentWrapper>
                    <CakeChartContainer>
                        <Headline>My Investments</Headline>
                        {
                            pieData.length > 0 ? <PieChart

                                data={pieData}
                                labelPosition={70}
                            /> : ''
                        }
                        <LegendWrapper>
                            {legend.map((legend, index) =>
                                <LegendContainer key={index}>
                                    <ColorSquare style={{ backgroundColor: legend.color }}/>
                                    <p>{legend.title}</p>
                                </LegendContainer>
                            )}
                        </LegendWrapper>
                    </CakeChartContainer>
                </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                    <Headline>Total value over time</Headline>
                    {
                        portfolioInfo.transactions ? <PortfolioChart data={portfolioInfo.transactions} /> : ''
                    }
                </ShrinkingComponentWrapper>
            </AllComponentsWrapper>
        </>
    )
}

export default Portfolio