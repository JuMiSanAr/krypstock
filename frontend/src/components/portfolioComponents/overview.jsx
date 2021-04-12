import React, {useEffect} from 'react';
import { ShrinkingComponentWrapper } from '../../styles/globalParts/containerStyles';
import {HeadlineFont, OverviewBar} from '../../styles/components/portfolioStyles';
import {useSelector} from 'react-redux';
import {allTheme} from '../../styles/Themes';

const Overview = () => {

    let colors = [allTheme.vibrantturquoise, allTheme.darkblue, allTheme.yellow, allTheme.vibrantorange];
    let currentColor = -1;

    const specificPortfolioArray = useSelector(state => state.specificPortfolioReducer.calculations)

    const getBackgroundColor = () => {
        if (currentColor >= colors.length) {
            currentColor = 0;
        } else {
            currentColor++;
        }
        return colors[currentColor];
    }

    return (
        <ShrinkingComponentWrapper>
            <HeadlineFont>Overview</HeadlineFont>
            {specificPortfolioArray.map((calculation) => 
            <OverviewBar style={{backgroundColor: getBackgroundColor()}}>
                <i className="fab fa-ethereum"></i>
                <HeadlineFont>{calculation.symbol}</HeadlineFont>
                <p>{calculation.invested} $</p>
                <p><i className="fas fa-angle-double-down"></i> 10%</p>
            </OverviewBar>
            )}
        </ShrinkingComponentWrapper>
)}

export default Overview;