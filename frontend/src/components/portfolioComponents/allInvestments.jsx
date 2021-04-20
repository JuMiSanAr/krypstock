import React, {useEffect, useState} from 'react';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import {InvestmentsContainer, InvestmentFont, Desc, AllInvestmentsHeadline} from '../../styles/components/portfolioStyles';


const AllInvestments = ({calculations, realtimeData, portfolioCreated}) => {

    const todayDate = new Date()
    const month = ("0" + (todayDate.getMonth() + 1)).slice(-2);
    const day = ("0" + todayDate.getDate()).slice(-2);
    const year = todayDate.getFullYear();

    const todayStringDate = `${year}-${month}-${day}`;
    const portfolioStringDate = portfolioCreated.slice(0, 10);

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

    const [currentBalance, setCurrentBalance] = useState(0);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [realtimeData]);

    useEffect(() => {
        if (yesterdayValue) {
            setDailyChange((currentValue - yesterdayValue) / yesterdayValue * 100);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [yesterdayValue]);

    useEffect(() => {
        if (currentValue > 0) {
            setDifferencePercentage((currentValue - totalInvestments) / totalInvestments * 100);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentValue]);

    useEffect(() => {
        if (calculations.length > 0) {
            setCurrentBalance(calculations.reduce((acc, calc) => {
                if (calc.overall_balance) {
                    return acc + calc.overall_balance;
                } else {
                    return acc + calc.previous_balance;
                }
            }, 0))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [calculations]);

    return (
        <>
            <ShrinkingComponentWrapper>
                <AllInvestmentsHeadline>Current status</AllInvestmentsHeadline>
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
                </InvestmentsContainer>
                <InvestmentsContainer>
                    <div>
                        <Desc>Total %</Desc>
                        <InvestmentFont>
                            {differencePercentage > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}> </i> : ''}
                            {differencePercentage < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}> </i> : ''}
                            {differencePercentage > 0 ? <span style={{color: 'green'}}>{differencePercentage.toFixed(2)} %</span> : <span style={{color: 'red'}}>{differencePercentage.toFixed(2)} %</span>}
                        </InvestmentFont>
                    </div>
                    <div>
                        <Desc>Today %</Desc>
                        <InvestmentFont>
                            {todayStringDate !== portfolioStringDate && dailyChange > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}> </i> : ''}
                            {todayStringDate !== portfolioStringDate && dailyChange < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}> </i> : ''}
                            {todayStringDate === portfolioStringDate && differencePercentage > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}> </i> : ''}
                            {todayStringDate === portfolioStringDate && differencePercentage < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}> </i> : ''}

                            {dailyChange && todayStringDate !== portfolioStringDate ? dailyChange.toFixed(2) : ''}
                            {dailyChange && todayStringDate === portfolioStringDate ? differencePercentage.toFixed(2) : ''}
                            %
                        </InvestmentFont>
                    </div>
                    </InvestmentsContainer>
                </ShrinkingComponentWrapper>
            <ShrinkingComponentWrapper>
                <AllInvestmentsHeadline>Historical</AllInvestmentsHeadline>
                <InvestmentsContainer>
                    <div>
                        <Desc>Executed P&L</Desc>
                        <InvestmentFont>
                            {currentBalance > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}> </i> : ''}
                            {currentBalance < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}> </i> : ''}
                            $ {currentBalance ? currentBalance.toFixed(2) : '0.00'}
                        </InvestmentFont>
                    </div>
                    <div>
                        <Desc>Overall balance</Desc>
                        <InvestmentFont>
                            {(parseFloat(currentValue) - totalInvestments + currentBalance).toFixed(2) > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}> </i> : ''}
                            {(parseFloat(currentValue) - totalInvestments + currentBalance).toFixed(2) < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}> </i> : ''}
                            $ {(parseFloat(currentValue) - totalInvestments + currentBalance).toFixed(2)}
                        </InvestmentFont>
                    </div>
                </InvestmentsContainer>
                <InvestmentsContainer>
                    <div>
                        <Desc>Overall change %</Desc>
                        <InvestmentFont>
                            {(parseFloat(currentValue) - totalInvestments + currentBalance).toFixed(2) > 0 ? <i className="fas fa-angle-double-up" style={{color: 'green'}}> </i> : ''}
                            {(parseFloat(currentValue) - totalInvestments + currentBalance).toFixed(2) < 0 ? <i className="fas fa-angle-double-down" style={{color: 'red'}}> </i> : ''}
                            {((parseFloat(currentValue) - totalInvestments + currentBalance) / totalInvestments * 100).toFixed(2)}%
                        </InvestmentFont>
                    </div>
                </InvestmentsContainer>
            </ShrinkingComponentWrapper>
        </>
    )
}

export default AllInvestments;