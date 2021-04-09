import React from 'react';
import {NoChartWrapper} from "../../styles/components/stockStyles/chartStyles";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const NoIntradayInfo = (props) => {

    return (
        <>
            <NoChartWrapper>
                <p>Due to regulations in the {props.market} market, there is no intraday information available for {props.companyName} at this moment</p>
                <ErrorOutlineIcon/>
                <p>We apologize for the inconvenience</p>
            </NoChartWrapper>
        </>
    )
}

export default NoIntradayInfo