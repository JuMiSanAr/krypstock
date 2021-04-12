import React from 'react';
import FooterNav from '../components/footerNav';
import { AllComponentsWrapper, ShrinkingComponentWrapper } from '../styles/globalParts/containerStyles';
import {HeadlineFont, CakeChartContainer} from '../styles/components/portfolioStyles';
import { PieChart } from 'react-minimal-pie-chart';
import Graph from '../assets/bit.png'
import PortfolioChart from '../components/charts/portfolioChart';
import AllInvestments from '../components/portfolioComponents/allInvestments';
import Overview from '../components/portfolioComponents/overview';

const Portfolio = (props) => {

    return (
        <>
            <AllComponentsWrapper>
                <AllInvestments/>
                <Overview/>
                <ShrinkingComponentWrapper>
                    <CakeChartContainer>
                        <HeadlineFont>My Investments</HeadlineFont>
                        <PieChart
                            data={[
                                { title: 'One', value: 10, color: '#05a49e' },
                                { title: 'Two', value: 15, color: '#384c98' },
                                { title: 'Three', value: 20, color: '#fe772c' },
                                { title: 'Three', value: 20, color: '#feaa2d' }
                            ]}
                        />
                    </CakeChartContainer>
                </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                    <HeadlineFont>Total value over time</HeadlineFont>
                    <PortfolioChart/>
                </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                    <HeadlineFont>Comparison</HeadlineFont>
                    <img src={Graph}></img>     
                </ShrinkingComponentWrapper>
            </AllComponentsWrapper>
            <FooterNav />
        </>
    )
}

export default Portfolio