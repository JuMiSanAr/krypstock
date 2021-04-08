import React, {useState} from 'react';
import FooterNav from '../components/footerNav';
import { AllComponentsWrapper, ShrinkingComponentWrapper } from '../styles/globalParts/containerStyles';
import {InvestmentsContainer, PercentContainer, InvestmentFont, OverviewBarBlue, OverviewBarGreen, OverviewBarYellow, OverviewBarOrange, HeadlineFont, CakeChartContainer} from '../styles/components/portfolioStyles';
import { PieChart } from 'react-minimal-pie-chart';
import Graph from '../assets/bit.png'
import CandlestickStockIntraday from "../components/charts/candlesticksStockIntraday";
import CandlestickStockHistorical from "../components/charts/candlesticksStockHistorical"; 
import ChartTimeframeButton from "../components/charts/chartSelectTimeframeButton";
import { FormSelectWrapper, GraphWrapper } from "../styles/components/cryptoStyles/bitCoinStyles";

const Portfolio = (props) => {

    const [chart, setChart] = useState('day');

    return (
        <>
            <AllComponentsWrapper>
                <ShrinkingComponentWrapper>
                    <HeadlineFont>All investments</HeadlineFont >
                    <InvestmentsContainer>
                        <div>
                            <p>invested</p>
                            <InvestmentFont>13'987 $</InvestmentFont>
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
                <ShrinkingComponentWrapper>
                    <HeadlineFont>Overview</HeadlineFont>
                    <OverviewBarGreen>
                        <i className="fab fa-ethereum"></i>
                        <HeadlineFont>Etherium</HeadlineFont>
                        <p>50'345</p>
                        <p><i className="fas fa-angle-double-down"></i> 10%</p>
                    </OverviewBarGreen>
                    <OverviewBarBlue>
                        <i className="fab fa-bitcoin"></i>
                        <HeadlineFont>BitCoin</HeadlineFont>
                        <p>1'000'000</p>
                        <p><i className="fas fa-angle-double-up"></i> 10%</p>
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
                    <FormSelectWrapper>
                    <div className="title">
                        <h3>Price Chart</h3>
                        </div>
                        <div >
                            <ChartTimeframeButton setChart={setChart}/>
                        </div>
                    </FormSelectWrapper>
                    <GraphWrapper>
                        {chart === 'day' ? <CandlestickStockIntraday/> : <CandlestickStockHistorical timeframe={chart}/>}
                    </GraphWrapper>   
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