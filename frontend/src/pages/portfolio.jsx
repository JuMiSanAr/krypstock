import React, {useEffect, useState} from 'react';
import FooterNav from '../components/footerNav';
import { AllComponentsWrapper, ShrinkingComponentWrapper } from '../styles/globalParts/containerStyles';
import {HeadlineFont, CakeChartContainer, PortfolioHeadline} from '../styles/components/portfolioStyles';
import { PieChart } from 'react-minimal-pie-chart';
import Graph from '../assets/bit.png'
import PortfolioChart from '../components/charts/portfolioChart';
import AllInvestments from '../components/portfolioComponents/allInvestments';
import Overview from '../components/portfolioComponents/overview';
import {specificPortfolioFetch} from "../store/fetches/portfoliosFetches";
import {specificPortfolioAction} from "../store/actions/specificPortfolioAction";
import {useDispatch, useSelector} from "react-redux";

const Portfolio = (props) => {

    useEffect(() => {
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1);
        setPortfolioId(id);
        specificPortfolioFetch(id)
        .then(data => {
            dispatch(specificPortfolioAction(data))
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
                    {
                        portfolioInfo.transactions ? <PortfolioChart data={portfolioInfo.transactions}/> : ''
                    }
                </ShrinkingComponentWrapper>
                <ShrinkingComponentWrapper>
                    <HeadlineFont>Comparison</HeadlineFont>
                    <img src={Graph}></img>     
                </ShrinkingComponentWrapper>
            </AllComponentsWrapper>
            {/* <FooterNav /> */}
        </>
    )
}

export default Portfolio