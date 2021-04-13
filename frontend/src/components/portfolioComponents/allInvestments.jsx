import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {specificPortfolioFetch} from '../../store/fetches/portfoliosFetches';
import { specificPortfolioAction } from '../../store/actions/specificPortfolioAction';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import {InvestmentsContainer, PercentContainer, InvestmentFont, HeadlineFont} from '../../styles/components/portfolioStyles';


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
                            <p>invested</p>
                            <InvestmentFont>
                                {totalInvestments} $
                            </InvestmentFont>
                        </div>
                        <div>
                            <p>balance</p>
                            <InvestmentFont>43'984 $</InvestmentFont>
                        </div>
                        <div>
                            <p>this week</p>
                            <InvestmentFont><i className="fas fa-angle-double-up"></i> 2.5%</InvestmentFont>
                        </div>
                    </InvestmentsContainer>
                </ShrinkingComponentWrapper>
    )
}

export default AllInvestments;