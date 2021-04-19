import React, {useEffect, useState} from 'react';
import {stockFetcherInfo} from "../charts/helperFunctions/stockFetcherInfo";
import {StockPageInfoWrapper, StockPageDataWrapper} from "../../styles/components/stockStyles/stockPageInfoStyles";
import { Desc, InvestmentFont } from '../../styles/components/portfolioStyles';

const StockPageInfoCard = (props) => {

    const [stockInfo, setStockInfo] = useState({});

    useEffect(() => {
        stockFetcherInfo(props.symbol, setStockInfo);
    }, []);

    useEffect(() => {
        props.setCompanyName(stockInfo.companyName);
        props.setCompanyMarket(stockInfo.exchange);
    }, [stockInfo]);
    console.log(stockInfo)

    return (
        <StockPageDataWrapper>
           {/*  <tbody>
                <tr>
                    <td className='key'>Symbol:</td>
                    <td>{stockInfo.symbol}</td>
                </tr>
                <tr>
                    <td className='key'>Country:</td>
                    <td>{stockInfo.country}</td>
                </tr>
                <tr>
                    <td className='key'>Exchange:</td>
                    <td>{stockInfo.exchange}</td>
                </tr>
                <tr>
                    <td className='key'>Industry:</td>
                    <td>{stockInfo.industry}</td>
                </tr>
                <tr>
                    <td className='key'>Website:</td>
                    <td><a href={stockInfo.website} target='_blank' rel='noreferrer'>Click here</a></td>
                </tr>
            </tbody> */}

            {/* <HeadlineFont>Current status</HeadlineFont > */}
                <div>
                    <Desc>Company</Desc>
                    <InvestmentFont>
                        {stockInfo.companyName}
                    </InvestmentFont>
                </div>
            {/* <div>
                    <Desc>Country</Desc>
                    <InvestmentFont>
                        {stockInfo.country}
                    </InvestmentFont>
                </div> */}
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