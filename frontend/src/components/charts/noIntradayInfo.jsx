import React from 'react';
import {NoChartWrapper} from "../../styles/components/stockStyles/chartStyles";

const NoIntradayInfo = (props) => {

    return (
        <>
            <NoChartWrapper>
                <p>Due to regulations in the {props.market} market, there is no intraday information available for {props.symbol} at this moment</p>
                <p>We apologize for the inconveniences caused</p>
            </NoChartWrapper>
        </>
    )
}

export default NoIntradayInfo