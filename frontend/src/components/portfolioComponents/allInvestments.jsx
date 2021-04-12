import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {specificPortfolioFetch} from '../../store/fetches/portfoliosFetches';
import { specificPortfolioAction } from '../../store/actions/specificPortfolioAction';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import {InvestmentsContainer, PercentContainer, InvestmentFont, HeadlineFont} from '../../styles/components/portfolioStyles';


const AllInvestments = () => {
    
    const calculateTotalInvestments = (portfolio) => {
        let total = 0;
        portfolio.forEach(investment => {
            total += investment.invested
        });
        return total;
    }

    const dispatch = useDispatch()
    const specificPortfolioArray = useSelector(state => state.specificPortfolioReducer.calculations)
    const specificPortfolio = specificPortfolioArray;
    let totalInvestments = calculateTotalInvestments(specificPortfolio);
    
    useEffect(() => {
        specificPortfolioFetch()
        .then(data => {
            dispatch(specificPortfolioAction(data.calculations))
        })
    }, [])

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
                            <PercentContainer>
                                <i className="fas fa-angle-double-up"></i>
                                {/* <i class="fas fa-angle-double-down"></i> */}
                                <InvestmentFont>2.5%</InvestmentFont>
                            </PercentContainer>
                        </div>
                    </InvestmentsContainer>
                </ShrinkingComponentWrapper>
    )
}

export default AllInvestments;