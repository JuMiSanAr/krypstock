import React, {useEffect, useState} from 'react';
import { AllComponentsWrapper, ShrinkingComponentWrapper } from '../styles/globalParts/containerStyles';
import {HeadlineFont, CakeChartContainer, PortfolioHeadline, LegendContainer, ColorSquare, LegendWrapper} from '../styles/components/portfolioStyles';
import { PieChart } from 'react-minimal-pie-chart';
import Graph from '../assets/bit.png'
import PortfolioChart from '../components/charts/portfolioChart';
import AllInvestments from '../components/portfolioComponents/allInvestments';
import Overview from '../components/portfolioComponents/overview';
import {specificPortfolioFetch} from "../store/fetches/portfoliosFetches";
import {specificPortfolioAction} from "../store/actions/specificPortfolioAction";
import {useDispatch, useSelector} from "react-redux";
import { allCryptosAction } from '../store/actions/cryptoActions';
import {allTheme} from '../styles/Themes';

const Portfolio = (props) => {

    useEffect(() => {
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1);
        setPortfolioId(id);
        specificPortfolioFetch(id)
        .then(data => {
            dispatch(specificPortfolioAction(data))
            const pieValues = [];
            const legend = [];
            const colors = [allTheme.vibrantturquoise, allTheme.darkblue, allTheme.yellow, allTheme.vibrantorange, allTheme.green, allTheme.purple, allTheme.blue];
            let colorIndex = 0;

            data.calculations.forEach((calculation) => {
                if (calculation.invested > 0) {

                    pieValues.push( {
                        title: calculation.symbol,
                        value: calculation.invested,
                        color: colors[colorIndex]
                    })
                
                    colorIndex++;
                    console.log(colorIndex)

                    if (colorIndex === 7) {
                        colorIndex = 0;
                    }   
                }
            })
            pieValues.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));

            const other = pieValues.filter((value, index) => index > 5);

            pieValues.splice(6)

            let otherValues = [];

            for (let i=0; i<other.length;i++){
                let value = other[i].value;
                otherValues.push(value);
            }

            const sum = otherValues.reduce((a, b) => a + b, 0)
            console.log(sum)

            pieValues.push( {
                title: "Other",
                value: sum,
                color: colors[colorIndex]
            })

            for (let i=0; i<pieValues.length;i++){
                legend.push({
                    title: pieValues[i].title, 
                    color: pieValues[i].color});
                }

            setPieData(pieValues);
            setLegend(legend);
        })
    }, [])
    
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
    }, [])

    const [portfolioId, setPortfolioId] = useState('');

    const dispatch = useDispatch()
    const portfolioInfo = useSelector(state => state.specificPortfolioReducer.portfolioInfo)

    return (
        <>
            <PortfolioHeadline>{portfolioInfo.name}</PortfolioHeadline>
            <AllComponentsWrapper>
                {
                    portfolioInfo.calculations ? <AllInvestments calculations={portfolioInfo.calculations}/> : ''
                }
                {
                    portfolioInfo.calculations ? <Overview calculations={portfolioInfo.calculations} transactions={portfolioInfo.transactions}/> : ''
                }

                <ShrinkingComponentWrapper>
                    <CakeChartContainer>
                        <HeadlineFont>My Investments</HeadlineFont>

                        {
                            pieData.length > 0 ? <PieChart
                            /* label={props => { return props.dataEntry.title;}}
                            labelStyle={{
                                fontSize: "7px",
                                textColor: "white"
                              }} */
                            data={pieData}
                            labelPosition={70}
                        />  : ''
                        }
                        
                        <LegendWrapper>
                        {legend.map((legend) =>
                            <LegendContainer key={legend.id}>
                                <ColorSquare style={{backgroundColor: legend.color}}></ColorSquare>
                                <p>{legend.title}</p>
                            </LegendContainer>
                        )}
                        </LegendWrapper>
                        
                        
                    </CakeChartContainer>
                </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                    <HeadlineFont>Total value over time</HeadlineFont>
                    {
                        portfolioInfo.transactions ? <PortfolioChart data={portfolioInfo.transactions}/> : ''
                    }
                </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                    <HeadlineFont>Comparison</HeadlineFont>
                    <img src={Graph}></img>     
                </ShrinkingComponentWrapper>
            </AllComponentsWrapper>
        </>
    )
}

export default Portfolio