import React, {useEffect, useState} from 'react';
import {stockFetcherInfo} from "../charts/helperFunctions/stockFetcherInfo";
import {StockPageInfoWrapper} from "../../styles/components/stockStyles/stockPageInfoStyles";

const StockPageInfoCard = (props) => {

    const [stockInfo, setStockInfo] = useState({});

    useEffect(() => {
        stockFetcherInfo(props.symbol, setStockInfo);
    }, []);

    useEffect(() => {
        props.setCompanyName(stockInfo.companyName);
        props.setCompanyMarket(stockInfo.exchange);
    }, [stockInfo]);

    return (
        <StockPageInfoWrapper>
            <tbody>
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
            </tbody>
        </StockPageInfoWrapper>
    )
}

export default StockPageInfoCard