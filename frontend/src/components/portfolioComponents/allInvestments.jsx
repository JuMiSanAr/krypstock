import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {specificPortfolioFetch} from '../../store/fetches/portfoliosFetches';
import { specificPortfolioAction } from '../../store/actions/specificPortfolioAction';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import {InvestmentsContainer, PercentContainer, InvestmentFont, HeadlineFont} from '../../styles/components/portfolioStyles';


const AllInvestments = ({calculations, realtimeData}) => {

    const [currentValue, setCurrentValue] = useState(null);

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
            const calculateValue = calculations.reduce((acc, calc) => {
                const realtimeValue = realtimeData.filter(item => item.symbol === calc.symbol);
                if (calc.type === 'S') {
                    return acc + calc.quantity * realtimeValue[0].price;
                } else {
                    return acc + calc.quantity * parseFloat(realtimeValue[0].lastPrice);
                }
            }, 0);
            setCurrentValue(calculateValue.toFixed(2));
        }

    }, [realtimeData]);

    useEffect(() => {
        if (currentValue > 0) {
            setDifferencePercentage(((currentValue - totalInvestments) / totalInvestments * 100));
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
                            <p>Invested</p>
                            <InvestmentFont>
                               $ {totalInvestments}
                            </InvestmentFont>
                        </div>
                        <div>
                            <p>Current value</p>
                            <InvestmentFont>
                               $ {currentValue}
                            </InvestmentFont>
                        </div>
                        <div>
                            <p>Total %</p>
                            <InvestmentFont>{differencePercentage.toFixed(2)}%</InvestmentFont>
                        </div>
                        <div>
                            <p>Today %</p>
                            <InvestmentFont><i className="fas fa-angle-double-up"></i> 2.5%</InvestmentFont>
                        </div>
                    </InvestmentsContainer>
                    <HeadlineFont>Overall portfolio balance</HeadlineFont >
                    <InvestmentsContainer>
                        <div>
                            <InvestmentFont>
                               $ {overallBalance.toFixed(2)}
                            </InvestmentFont>
                        </div>
                    </InvestmentsContainer>
                </ShrinkingComponentWrapper>
    )
}

export default AllInvestments;