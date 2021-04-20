import React, {useEffect, useState} from 'react';
import {stockFetcherInfo} from "../charts/helperFunctions/stockFetcherInfo";
import {StockPageDataWrapper} from "../../styles/components/stockStyles/stockPageInfoStyles";
import { Desc, InvestmentFont } from '../../styles/components/portfolioStyles';

const StockPageInfoCard = (props) => {

    const [stockInfo, setStockInfo] = useState({});

    useEffect(() => {
        stockFetcherInfo(props.symbol, setStockInfo);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        props.setCompanyName(stockInfo.companyName);
        props.setCompanyMarket(stockInfo.exchange);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stockInfo]);

    return (
        <StockPageDataWrapper>
            <div>
                <Desc>Company</Desc>
                <InvestmentFont>
                    {stockInfo.companyName}
                </InvestmentFont>
            </div>
            <div>
                <Desc>Exchange</Desc>
                <InvestmentFont>
                    {stockInfo.exchange}
                </InvestmentFont>
            </div>
            <div>
                <Desc>Industry</Desc>
                <InvestmentFont>
                    {stockInfo.industry}
                </InvestmentFont>
            </div>
            <div>
                <Desc>Website</Desc>
                <InvestmentFont>
                    <a href={stockInfo.website} target='_blank' rel='noreferrer'>Click here</a>
                </InvestmentFont>
            </div>
        </StockPageDataWrapper>
    )
}

export default StockPageInfoCard