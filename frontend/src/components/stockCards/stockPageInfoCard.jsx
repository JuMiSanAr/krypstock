import React, {useEffect, useState} from 'react';
import {stockFetcherInfo} from "../charts/helperFunctions/stockFetcherInfo";
import {StockPageInfoItemWrapper, StockPageInfoWrapper} from "../../styles/components/stockStyles/stockPageInfoStyles";

const StockPageInfoCard = (props) => {

    const [stockInfo, setStockInfo] = useState({});

    useEffect(() => {
        stockFetcherInfo(props.symbol, setStockInfo);
    }, []);

    useEffect(() => {
        props.setCompanyName(stockInfo.companyName);
    }, [stockInfo]);

    console.log(stockInfo)

    return (
        <StockPageInfoWrapper>
            <tbody>
                <tr>
                    <p>Symbol: <span>{stockInfo.symbol}</span></p>
                </tr>
                <tr>
                    <p>Country: <span>{stockInfo.country}</span></p>
                </tr>
                <tr>
                    <p>Exchange: <span>{stockInfo.exchange}</span></p>
                </tr>
                <tr>
                    <p>Symbol: <span>{stockInfo.symbol}</span></p>
                </tr>
            </tbody>
        </StockPageInfoWrapper>
    )
}

export default StockPageInfoCard