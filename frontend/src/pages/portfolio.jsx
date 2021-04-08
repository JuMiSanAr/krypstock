import React from 'react';
import FooterNav from '../components/footerNav';
import { AllComponentsWrapper, ShrinkingComponentWrapper } from '../styles/globalParts/containerStyles';
import {InvestmentsContainer, OverviewBarBlue, OverviewBarGreen, OverviewBarYellow, OverviewBarOrange, HeadlineFont, CakeChartContainer} from '../styles/components/portfolioStyles';
import { PieChart } from 'react-minimal-pie-chart';
import Graph from '../assets/bit.png'


const Portfolio = () => {

    return (
        <>
        
            <AllComponentsWrapper>
                <ShrinkingComponentWrapper>
                    <HeadlineFont>All investments</HeadlineFont >
                    <InvestmentsContainer>
                        <p>1000</p>
                        <p>4000</p>
                        <p>+- 10%</p>
                    </InvestmentsContainer>
                </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                    <HeadlineFont>Overview</HeadlineFont>
                    <OverviewBarGreen>
                        <i class="fab fa-ethereum"></i>
                        <HeadlineFont>Etherium</HeadlineFont>
                        <p>50'345</p>
                        <p>+- 10%</p>
                    </OverviewBarGreen>
                    <OverviewBarBlue>
                        <i class="fab fa-bitcoin"></i>
                        <HeadlineFont>BitCoin</HeadlineFont>
                        <p>1'000'000</p>
                        <p>+- 10%</p>
                    </OverviewBarBlue>
                    <OverviewBarYellow>
                        <HeadlineFont>Etherium</HeadlineFont>
                        <p>32'000</p>
                        <p>+- 10%</p>
                    </OverviewBarYellow>
                    <OverviewBarOrange>
                        <HeadlineFont>Etherium</HeadlineFont>
                        <p>659'934</p>
                        <p>+- 10%</p>
                    </OverviewBarOrange>
                </ShrinkingComponentWrapper>
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
                    <img src={Graph}></img>     
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