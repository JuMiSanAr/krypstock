import React, {useEffect} from 'react';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import {HeadlineFont, Headline, OverviewBar, TempDiv, Desc, NetworthContainer, IconConatiner} from '../../styles/components/portfolioStyles';
import {useSelector} from 'react-redux';
import {allTheme} from '../../styles/Themes';

const Overview = ({calculations}) => {

    let colors = [allTheme.vibrantturquoise, allTheme.darkblue, allTheme.yellow, allTheme.vibrantorange];
    let currentColor = -1;

    const specificPortfolioArray = useSelector(state => state.specificPortfolioReducer.calculations)

    const getBackgroundColor = () => {
        if (currentColor >= colors.length -1) {
            currentColor = 0;
        } else {
            currentColor++;
        }
        return colors[currentColor];
    }
    

    return (
        <ShrinkingComponentWrapper>
            <Headline>Overview</Headline>
            {calculations.map((calculation, index) =>
            {if (calculation.invested > 0) {
                return (
            <OverviewBar key={index} style={{backgroundColor: getBackgroundColor()}}>
                <IconConatiner>
                    {calculation.type === "S"
                    ? <i className="fas fa-briefcase"></i>
                    : <i className="fab fa-btc"></i>
                    }
                    <HeadlineFont>{calculation.symbol}</HeadlineFont>
                </IconConatiner>
                <NetworthContainer>
                    <TempDiv>
                        <Desc>invested</Desc>
                        <p>{calculation.invested} $</p>
                    </TempDiv>
                    <TempDiv>
                        <Desc>current</Desc>
                        <p>34924</p>
                    </TempDiv>
                </NetworthContainer>
                <div>
                    <TempDiv>
                        <Desc>quantity</Desc>
                        <p>{calculation.quantity}</p>
                    </TempDiv>
                </div>
                <p><i className="fas fa-angle-double-down"></i> 10%</p>
            </OverviewBar>
            )}})}
        </ShrinkingComponentWrapper>
)}

export default Overview;