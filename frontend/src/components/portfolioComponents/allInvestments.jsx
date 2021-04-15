import React from 'react';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import {InvestmentsContainer, InvestmentFont, HeadlineFont} from '../../styles/components/portfolioStyles';


const AllInvestments = ({calculations}) => {
    
    const calculateTotalInvestments = (calc) => {
        let total = 0;
        calc.forEach(singleCalc => {
            total += singleCalc.invested
        });
        return total;
    }

    let totalInvestments = calculateTotalInvestments(calculations);

    return (
        <ShrinkingComponentWrapper>
                <h1>{}</h1>
                    <HeadlineFont>All investments</HeadlineFont >
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
                               $ {totalInvestments}
                            </InvestmentFont>
                        </div>
                        <div>
                            <p>Previous balance</p>
                            <InvestmentFont>$ 43'984</InvestmentFont>
                        </div>
                        <div>
                            <p>Today</p>
                            <InvestmentFont><i className="fas fa-angle-double-up"></i> 2.5%</InvestmentFont>
                        </div>
                    </InvestmentsContainer>
                </ShrinkingComponentWrapper>
    )
}

export default AllInvestments;