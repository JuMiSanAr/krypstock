import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {specificPortfolioFetch} from '../../store/fetches/portfoliosFetches';
import { specificPortfolioAction } from '../../store/actions/specificPortfolioAction';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import {InvestmentsContainer, InvestmentFont, HeadlineFont, Desc} from '../../styles/components/portfolioStyles';


const AllInvestments = ({calculations, realtimeData}) => {

    const [currentValue, setCurrentValue] = useState(null);
    const [yesterdayValue, setYesterdayValue] = useState(null);

    const [dailyChange, setDailyChange] = useState(null);

    const calculateTotalInvestments = (calc) => {
        let total = 0;
        calc.forEach(singleCalc => {
            total += singleCalc.invested
        });
        return total;
    }

    const totalInvestments = calculateTotalInvestments(calculations).toFixed(2);

    const [differencePercentage, setDifferencePercentage] = useState(0);

    const [overallBalance, setOverallBalance] = useState(0);

    useEffect(() => {
        if (realtimeData.length > 0) {
            let yesterdayPrices= 0;
            const calculateValue = calculations.reduce((acc, calc) => {
                const realtimeValue = realtimeData.filter(item => item.symbol === calc.symbol);
                if (calc.type === 'S' && calc.quantity && realtimeValue[0]) {
                    yesterdayPrices += calc.quantity * realtimeValue[0].previousClose;
                    return acc + calc.quantity * realtimeValue[0].latestPrice;
                } else if (calc.type === 'C' && calc.quantity && realtimeValue[0]) {
                    yesterdayPrices += calc.quantity * parseFloat(realtimeValue[0].prevClosePrice);
                    return acc + calc.quantity * parseFloat(realtimeValue[0].lastPrice);
                } else {
                    return acc;
                }
            }, 0);
            setYesterdayValue(yesterdayPrices);
            setCurrentValue(calculateValue.toFixed(2));
        }
    }, [realtimeData]);

    useEffect(() => {
        if (yesterdayValue) {
            setDailyChange((currentValue - yesterdayValue) / yesterdayValue * 100);
        }
    }, [yesterdayValue]);

    useEffect(() => {
        if (currentValue > 0) {
            setDifferencePercentage((currentValue - totalInvestments) / totalInvestments * 100);
        }
    }, [currentValue]);

    useEffect(() => {
        if (calculations.length > 0) {
            setOverallBalance(calculations.reduce((acc, calc) => {
                if (calc.overall_balance) {
                    return acc + calc.overall_balance;
                } else {
                    return acc + calc.previous_balance;
                }
            }, 0))
        }
    }, [calculations]);

    return (
        <ShrinkingComponentWrapper>
                <h1>{}</h1>
                    <HeadlineFont>Current status</HeadlineFont >
                    <InvestmentsContainer>
                        <div>
                            <Desc>Invested</Desc>
                            <InvestmentFont>
                               $ {totalInvestments}
                            </InvestmentFont>
                        </div>
                        <div>
                            <Desc>Current value</Desc>
                            <InvestmentFont>
                               $ {currentValue}
                            </InvestmentFont>
                        </div>
                        <div>
                            <Desc>Total %</Desc>
                            <InvestmentFont>
                                {differencePercentage > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}></i> : ''}
                                {differencePercentage < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}></i> : ''}
                                {differencePercentage ? differencePercentage.toFixed(2) : ''}%
                            </InvestmentFont>
                        </div>
                        <div>
                            <Desc>Today %</Desc>
                            <InvestmentFont>
                                {dailyChange > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}></i> : ''}
                                {dailyChange < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}></i> : ''}
                                {dailyChange ? dailyChange.toFixed(2) : ''}%
                            </InvestmentFont>
                        </div>
                    </InvestmentsContainer>
                    <HeadlineFont>Historical</HeadlineFont >
                    <InvestmentsContainer>
                        <div>
                            <Desc>Executed P&L</Desc>
                            <InvestmentFont>
                                {overallBalance > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}></i> : ''}
                                {overallBalance < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}></i> : ''}
                               $ {overallBalance ? overallBalance.toFixed(2) : '0.00'}
                            </InvestmentFont>
                        </div>
                        <div>
                            <Desc>Overall balance</Desc>
                            <InvestmentFont>
                                {parseFloat(currentValue) + overallBalance > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}></i> : ''}
                                {parseFloat(currentValue) + overallBalance < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}></i> : ''}
                               $ {parseFloat(currentValue) + overallBalance}
                            </InvestmentFont>
                        </div>
                    </InvestmentsContainer>
                </ShrinkingComponentWrapper>
    )
}

export default AllInvestments;