import React from 'react';
import FooterNav from '../components/footerNav';
import { AllComponentsWrapper, ShrinkingComponentWrapper } from '../styles/globalParts/containerStyles';
import {InvestmentsContainer, OverviewContainer, HeadlineFont} from '../styles/components/portfolioStyles';

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
                    <OverviewContainer>
                        <HeadlineFont>Etherium</HeadlineFont>
                        <p>1'000'000</p>
                        <p>+- 10%</p>
                    </OverviewContainer>
                    <OverviewContainer>
                        <HeadlineFont>Etherium</HeadlineFont>
                        <p>1'000'000</p>
                        <p>+- 10%</p>
                    </OverviewContainer>
                    <OverviewContainer>
                        <HeadlineFont>Etherium</HeadlineFont>
                        <p>1'000'000</p>
                        <p>+- 10%</p>
                    </OverviewContainer>
                </ShrinkingComponentWrapper>
            </AllComponentsWrapper>
            <FooterNav />
        </>
    )
}

export default Portfolio